This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## install shadcn ui

npx shadcn@latest init

# header section
### Header Structure

- Header.tsx: ساختار اصلی هدر
- Navbar.tsx: نوار ناوبری بالا
  -  Logo, Menu, SignUpBtn, MobileNav
- SubNav.tsx: زیرمنو

استفاده در صفحه اصلی (page):
import Navbar from './Navbar';
import SubNav from './SubNav';

```bash
function Header() {
return (

<header className="w-full px-4 md:px-28">
  <Navbar />
  <SubNav />
</header>
);
}

export default Header;
```


# Navbar component in header

### navbar Structure
Logo:شامل تصویر لوگو و نوشته های اطراف
Menu: شامل لینک های منو در دسکتاپ
SignUpBtn:لینک ورود و ثبت نام
MobileNav:آیکون همبرگری و کامپوننت sheet shadcn ui
```bash
function Navbar() {
  return (
    <nav className="py-6 border-b border-b-gray-200 w-full flex items-center justify-between">
      <Logo />
      <Menu />
      <div className="flex items-center">
        <SignUpBtn />
        {/* mobile nav */}
        <MobileNav />
      </div>
    </nav>
  );
}
```


# landing section

```bash
function Landing() {
  return (
    <div className="bg-[url(/images/Banner.svg)] bg-center bg-no-repeat bg-cover mx-auto w-full h-[292px] md:h-[382px] flex items-center justify-center">
      <div>
        <div className="flex items-center justify-center flex-col gap-y-[5px]">
          <div className=" self-start">
            <Image
              src="/images/“.svg"
              width={26}
              height={24}
              alt='"'
              className="w-[18px] h-[18px] md:w-[26px] md:h-[24px]"
            />
          </div>
          <div className=" text-t1 md:text-d2 text-white font-bold flex items-center justify-center flex-col  space-y-1.5">
            <p>
              تلاش ما دسترسی{' '}
              <span className="bg-secondary-200 text-primary-500 rounded-md px-2">
                سریعتر و آسان{' '}
              </span>
            </p>
            <p>تر شما به خدمات پزشکی است):</p>
          </div>
          <div className="self-end-safe">
            <Image
              src="/images/“ (1).svg"
              width={26}
              height={24}
              alt='"'
              className="w-[18px] h-[18px] md:w-[26px] md:h-[24px]"
            />
          </div>
        </div>

        <div className="text-white text-tiny md:text-b1 flex items-center justify-center flex-col space-y-1.5">
          <p className="text-center">کافیست خدمات درمانی موردنظر خود را جستجو کنید</p>
          <p className="text-center">(دریافت نوبت،مشاوره پزشکی،خدمات پزشکی در منزل)</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
```

# add searchbar to landing page
```bash
import React from 'react';

function SearchBar() {
  return (
    <div className="flex items-center bg-white border border-primary-300 rounded-xl overflow-hidden shadow-md px-2 py-1  w-ful mx-auto">
      {/* دکمه انتخاب شهر */}
      <button className="flex items-center gap-1 px-3 py-2 text-tiny  text-primary-500 border-e border-dotted border-gray-300">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
          />
        </svg>
        انتخاب شهر
      </button>

      {/* فیلد سرچ */}
      <input
        type="text"
        placeholder="جستجو پزشک،درمانگر،کلینیک..."
        className="flex-1 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none text-right"
      />

      {/* آیکون سرچ */}
      <div className="px-2 text-gray-500">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
          />
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
```

# install prisma
```bash
npm install prisma --save-dev
npm install tsx --save-dev
```

### get  DATABASE_URL and DIRECT_URL form supabase and add  to env file 
prisma/schema.prisma

```bash
generator client {
  provider = "prisma-client-js"

}

datasource db {
  provider = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```
####create model user and PasswordResetToken
```bash
model User {
  id      Int      @id @default(autoincrement())
  name     String?
  familyname  String?
  profilepicture String?
  username String
  email   String   @unique
  password String
  city   String?
  state   String?
  code   String?
  role    Role     @default(USER)
  passwordResetTokens PasswordResetToken[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum Role {
  USER
  DOCTOR
  ADMIN
}

model PasswordResetToken {
  id              Int      @id @default(autoincrement())
  userId          Int      @unique
  token           String
  tokenExpiration DateTime

  user            User     @relation(fields: [userId], references: [id])
}
```

```bash
npx prisma db push
```
# Authentication concept

## install auth js

```bash
npm install next-auth@beta
npx auth secret
```
### Configure authjs
./auth.ts
```bash
import NextAuth from "next-auth"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
})
```
./app/api/auth/[...nextauth]/route.ts
```bash
./app/api/auth/[...nextauth]/route.ts

import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers
```

### authentication based on Credentials

in auth.ts 

```bash

import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import db from './db';
import { compare } from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials, req) => {
        const user = await db.user.findFirst({
          where: {
            email: credentials.email!,
          },
        });
        console.log('find user', user);
        if (!user) {
          throw new Error('شما ثبت نام نکردید!');
        } else {
          const correctPass = await compare(credentials.password as string, user.password);
          if (!correctPass) {
            throw new Error('رمز عبور اشتباه است!');
          }
        }
        return {
          id: user.id.toString(),
          email: user.email,
          name: user.username,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.user) {
        session.user = token.user as any;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});
```

### create register form
#### add form component form shadcn ui with zod and react hook form

```bash
'use client';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { registerFormSchema } from '@/lib/schema/authSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../ui/button';
import { addRegister } from '@/actions/formaction';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function RegisterForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  async function onSubmit(values: z.infer<typeof registerFormSchema>) {
    console.log(values);
    try {
      const res = await addRegister(values);
      if (res?.error) {
        toast.error(res.message, {
          style: {
            background: '#F9E8E8',
            borderColor: '#F9E8E8',
            color: '#8D1212',
            textAlign: 'center',
          },
        });
      } else {
        router.push('/login');
        toast.success('ثبت نام شما با موفقیت انجام شد', {
          style: {
            background: '##E6F5EF',
            borderColor: '##E6F5EF',
            color: '##025732',
            textAlign: 'center',
          },
        });
      }
    } catch (error) {}
  }
  return (
    <Card className="">
      <CardHeader className="flex items-center justify-center flex-col gap-y-6">
        <div>
          <Image width={100} height={100} src="/images/Logo-1.svg" alt="logo" />
        </div>
        <CardTitle className="text-he1 text-Black-400">ثبت نام</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام کاربری</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ایمیل</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="...@email.com" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>رمز عبور</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>تکرار عبور</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={form.formState.isSubmitting}
              className="w-full bg-primary-500 text-white disabled:bg-primary-800 disabled:opacity-60"
              type="submit"
            >
              {form.formState.isSubmitting ? (
                <Loader className="animate-spin transition-all duration-200 size-6" />
              ) : (
                'ثبت نام'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <p className="text-gray-500">قبلا ثبت نام کرده اید؟</p>
        <Button asChild variant="link" className="text-primary-500">
          <Link href="/login">صفحه ورود</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default RegisterForm;
```

### create register server action
add registered user to db
```bash
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
```

### create loginform

```bash
'use client';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { loginFormSchema } from '@/lib/schema/authSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../ui/button';
import { loginWithCredentials } from '@/actions/formaction';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function LoginForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    try {
      const res = await loginWithCredentials({
        email: values.email,
        password: values.password,
      });
      console.log(res);

      if (res?.error) {
        toast.error(res.message, {
          style: {
            background: '#F9E8E8',
            borderColor: '#F9E8E8',
            color: '#8D1212',
            textAlign: 'center',
          },
        });
      } else {
        router.push('/');
        toast.success('ورود شما باموفقیت انجام شد', {
          style: {
            background: '##E6F5EF',
            borderColor: '##E6F5EF',
            color: '##025732',
            textAlign: 'center',
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  const email = form.getValues('email');
  console.log(email);

  return (
    <Card className="">
      <CardHeader className="flex items-center justify-center flex-col gap-y-6">
        <div>
          <Image width={100} height={100} src="/images/Logo-1.svg" alt="logo" />
        </div>
        <CardTitle className="text-he1 text-Black-400">ورود</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ایمیل</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="...@email.com" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>رمز عبور</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={form.formState.isSubmitting}
              className="w-full bg-primary-500 text-white disabled:bg-primary-800 disabled:opacity-60"
              type="submit"
            >
              {form.formState.isSubmitting ? (
                <Loader className="animate-spin transition-all duration-200 size-6" />
              ) : (
                'ورود'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="flex items-center justify-center">
          <p className="text-gray-500">ثبت نام نکردید؟</p>
          <Button asChild variant="link" className="text-primary-500">
            <Link href="/register">صفحه ثبت نام</Link>
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <Button asChild variant="link" className="text-primary-500">
            <Link href={`/reset-password${email ? `?email=${encodeURIComponent(email)}` : ''}`}>
              فراموشی رمز عبور
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default LoginForm;
```

#### create login server action
```bash
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
```

add signIn from auth js to handler credentials with email and password

```bash
await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

```

### manage reset password when user do not remember pass

### create reset pass component


```bash
'use client';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { date, z } from 'zod';
import { Button } from '../ui/button';
import { Loader } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ResetPassword } from '@/actions/formaction';
import { toast } from 'sonner';
const resetSchema = z.object({
  email: z.string().email('ایمیل معتبر وارد کنید'),
});
function ResetPassForm() {
  const searchParams = useSearchParams();
  const form = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      email: decodeURIComponent(searchParams.get('email') ?? ''),
    },
  });
  async function onSubmit(values: z.infer<typeof resetSchema>) {
    console.log(values);
    try {
      const res = await ResetPassword({ email: values.email });
      if (res?.error) {
        toast.error(res.message, {
          style: {
            background: '#F9E8E8',
            borderColor: '#F9E8E8',
            color: '#8D1212',
            textAlign: 'center',
          },
        });
      } else {
        toast.success('ایمیل بازیابی رمز عبور با موفقیت ارسال شد');
      }
    } catch (error) {}
  }

  return (
    <Card>
      <CardHeader className="space-y-1.5">
        <CardTitle>بازیابی رمز عبور</CardTitle>
        <CardDescription>ایمیل خود را برای بازیابی رمز عبور وارد کنید</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ایمیل</FormLabel>
                  <FormControl>
                    <Input placeholder="" type="email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={form.formState.isSubmitting}
              className="w-full bg-primary-500 text-white disabled:bg-primary-800 disabled:opacity-60"
              type="submit"
            >
              {form.formState.isSubmitting ? (
                <Loader className="animate-spin transition-all duration-200 size-6" />
              ) : (
                'ارسال'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col text-tiny">
        <div className="flex items-center justify-center">
          <p className="text-gray-500 ">رمز خود را به یاد آوردید؟</p>
          <Button variant="link" className="text-primary-500">
            <Link href="/login">ورود</Link>
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-gray-500 ">قبلا ثبت نام نکرده اید؟</p>
          <Button variant="link" className="text-primary-500">
            <Link href="/register">ثبت نام</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ResetPassForm;
```
### install resend package for email 

```bash
npm install resend
```
### Create an resend template
```bash

import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

```
### create reset pass for reset pass component to create token  for user

```bash
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
```
#### use resend for redirect user to update password page with token
```bash
 const reset_link = `${process.env.SITE_BASE_URL}/update-password?token=${passwordResetToken}`;

    await resend.emails.send({
      from: 'nobito@resend.dev',
      to: email,
      subject: 'بازیابی رمز عبور',
      html: `برای بازیابی رمز عبور خود بر روی لینک زیر کلیک کنید: <a href="${reset_link}">${reset_link}</a>`,
    });
```

### create update password component

```bash
import UpdatePassForm from '@/components/auth/UpdatePassForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import db from '@/db';
import Link from 'next/link';

async function page({ searchParams }: { searchParams: { token?: string } }) {
  let tokenIsValid = false;
  const { token } = searchParams;
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
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {tokenIsValid ? 'بازیابی رمز عبور' : 'رمز عبور فرستاده شده به ایمیل شما منقضی شده است'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {tokenIsValid ? (
          <div>
            <UpdatePassForm />
          </div>
        ) : (
          <Button variant="link" className="text-primary-500">
            <Link href="/reset-password">بازیابی رمز عبور</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default page;
```

### create update pass server action based on token

```bash
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
```



