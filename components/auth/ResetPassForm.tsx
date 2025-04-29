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
