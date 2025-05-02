'use server';

import { auth, signIn } from '@/auth';
import db from '@/db';
import { resend } from '@/lib/email';
import { loginFormSchema, registerFormSchema, updatePassSchema } from '@/lib/schema/authSchema';

import { hash } from 'bcryptjs';
import { randomBytes } from 'crypto';

// register form action

export const addRegister = async ({
  username,
  email,
  password,
  confirmPassword,
}: {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  try {
    const newUserValidation = registerFormSchema.safeParse({
      username,
      email,
      password,
      confirmPassword,
    });

    if (!newUserValidation.success) {
      return {
        error: true,
        message: newUserValidation.error.issues[0].message ?? 'خطایی رخ داد دوباره تلاش کنید',
      };
    }
    const hasgpasword = await hash(password, 10);
    await db.user.create({
      data: {
        email: email,
        password: hasgpasword,
        username: username,
      },
    });
  } catch (error: any) {
    console.log(error);

    if (error.code === 'P2002') {
      return {
        error: true,
        message: 'این ایمیل قبلا استفاده شده است',
      };
    } else {
      return {
        error: true,
        message: 'خطایی رخ داد',
      };
    }
  }
};

// login actio
export const loginWithCredentials = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const newValidationUser = loginFormSchema.safeParse({
      email,
      password,
    });
    if (!newValidationUser.success) {
      return {
        error: true,
        message: newValidationUser.error.issues[0].message ?? 'خطا در اطلاعات وارد شده',
      };
    }

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    return {
      error: true,
      message: 'خطایی رخ داد دوباره تلاش کنید',
    };
  }
};

// create token


// reset password action

export const ResetPassword = async ({ email }: { email: string }) => {
  try {
    const session = await auth();
    if (!!session?.user?.id) {
      return {
        error: true,
        message: 'شما قبلا وارد شده اید',
      };
    }
    const user = await db.user.findFirst({
      where: {
        email: email,
      },
    });

    console.log(user);

    if (!user) {
      return {
        error: true,
        message: 'شما با این ایمیل ثبت نام نکرده اید',
      };
    }
    // create random token password
    const passwordResetToken = randomBytes(32).toString('hex');
    const tokenExpiry = new Date(Date.now() + 60 * 60 * 1000);

    await db.passwordResetToken.upsert({
      where: { userId: user.id },
      update: {
        token: passwordResetToken,
        tokenExpiration: tokenExpiry,
      },
      create: {
        userId: user.id,
        token: passwordResetToken,
        tokenExpiration: tokenExpiry,
      },
    });

    const reset_link = `${process.env.SITE_BASE_URL}/update-password?token=${passwordResetToken}`;

    await resend.emails.send({
      from: 'nobito@resend.dev',
      to: email,
      subject: 'بازیابی رمز عبور',
      html: `برای بازیابی رمز عبور خود بر روی لینک زیر کلیک کنید: <a href="${reset_link}">${reset_link}</a>`,
    });
  } catch (error) {
    console.log(error);

    return {
      error: true,
      message: 'خطا در ارسال کد',
    };
  }
};

// update password action

export const updatePassword = async ({
  token,
  password,
  confirmPassword,
}: {
  token: string | undefined;
  password: string;
  confirmPassword: string;
}) => {
  try {
    const passvalidation = updatePassSchema.safeParse({
      password,
      confirmPassword,
    });
    if (!passvalidation.success) {
      return {
        error: true,
        message: 'اشتباه در اطلاعات وارد شده',
      };
    }
    const session = await auth();
    if (!!session?.user?.id) {
      return {
        error: true,
        message: 'شما قبلا وارد شدید!',
      };
    }

    let tokenIsValid = false;

    if (token) {
      const passwordResetTokens = await db.passwordResetToken.findFirst({
        where: {
          token: token,
        },
      });
      const now = Date.now();
      if (
        !!passwordResetTokens?.tokenExpiration &&
        now < passwordResetTokens.tokenExpiration.getTime()
      ) {
        tokenIsValid = true;
      }
      if (!tokenIsValid) {
        return {
          error: true,
          message: 'رمز عبور ازسالی به ایمیل شما منقضی شده است',
          tokenInvalid: true,
        };
      }
      const hashPassword = await hash(password, 10);
      await db.user.update({
        data: {
          password: hashPassword,
        },
        where: {
          id: passwordResetTokens?.userId,
        },
      });
      await db.passwordResetToken.delete({
        where: {
          userId: passwordResetTokens?.userId,
        },
      });
    }
  } catch (error) {}
};
