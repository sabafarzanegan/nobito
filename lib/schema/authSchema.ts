import { z } from 'zod';

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
);

export const registerFormSchema = z
  .object({
    username: z.string().min(2, 'حداقل 2 حرف ').max(50),
    email: z.string().email('ایمیل معتبر وارد کنید'),
    password: z.string().min(8, 'رمز عبور حداقل 8 رقم باشد').regex(passwordValidation, {
      message: 'رمز عبور باید شامل علامت (!@#$%^&*)وشامل یک حرف بزرگ و کوچک',
    }),
    confirmPassword: z.string(),
  })
  .superRefine((val, clx) => {
    if (val.password !== val.confirmPassword) {
      clx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['confirmPassword'],
        message: 'تکرار رمز عبور اشتباه است',
      });
    }
  });

export const loginFormSchema = z.object({
  email: z.string().email('ایمیل معتبر وارد کنید'),
  password: z.string().min(8, 'رمز عبور حداقل 8 رقم باشد').regex(passwordValidation, {
    message: 'رمز عبور باید شامل علامت (!@#$%^&*)وشامل یک حرف بزرگ و کوچک',
  }),
});

export const updatePassSchema = z
  .object({
    password: z.string().min(8, 'رمز عبور حداقل 8 رقم باشد').regex(passwordValidation, {
      message: 'رمز عبور باید شامل علامت (!@#$%^&*)وشامل یک حرف بزرگ و کوچک',
    }),
    confirmPassword: z.string(),
  })
  .superRefine((val, clx) => {
    if (val.password !== val.confirmPassword) {
      clx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['confirmPassword'],
        message: 'تکرار رمز عبور اشتباه است',
      });
    }
  });
