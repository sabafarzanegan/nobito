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
