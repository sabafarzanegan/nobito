'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { loginFormSchema } from '@/lib/schema/authSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../ui/button';

function LoginForm() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values);
  }
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

            <Button className="w-full bg-primary-500 text-white" type="submit">
              ثبت نام
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default LoginForm;
