'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { z } from 'zod';
import { updatePassSchema } from '@/lib/schema/authSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import { Loader } from 'lucide-react';
import { updatePassword } from '@/actions/formaction';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';

function UpdatePassForm() {
  const searchparams = useSearchParams();
  const router = useRouter();
  const form = useForm<z.infer<typeof updatePassSchema>>({
    resolver: zodResolver(updatePassSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });
  async function onSubmit(values: z.infer<typeof updatePassSchema>) {
    console.log(values);
    try {
      const res = await updatePassword({
        password: values.password,
        confirmPassword: values.confirmPassword,

        token: searchparams.get('token')?.toString(),
      });
      if (res?.error) {
        toast.error(res.message);
      } else {
        router.push('/login');
        toast.success('رمز عبور شما با موفقیت تغییر کرد');
      }
    } catch (error) {}
  }
  return (
    <Card>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>رمز عبور جدید</FormLabel>
                  <FormControl>
                    <Input placeholder="********" type="password" {...field} />
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
                  <FormLabel>تکرار رمز عبور</FormLabel>
                  <FormControl>
                    <Input placeholder="********" type="password" {...field} />
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
                'بازیابی'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default UpdatePassForm;
