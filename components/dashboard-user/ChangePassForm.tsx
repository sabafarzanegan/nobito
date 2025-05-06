'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import { Loader } from 'lucide-react';
import { ChangepassSchema } from '@/lib/schema/authSchema';
import { changePassAction } from '@/actions/formaction';
import { toast } from 'sonner';
const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
);

function ChangePassForm() {
  const form = useForm<z.infer<typeof ChangepassSchema>>({
    resolver: zodResolver(ChangepassSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });
  async function onSubmit(values: z.infer<typeof ChangepassSchema>) {
    console.log(values);
    const res = await changePassAction({
      password: values.password,
      confirmPassword: values.confirmPassword,
    });
    if (res?.error) {
      toast.error(res.message);
    } else {
      toast.success(res?.message);
    }
  }
  return (
    <Card className="p-6">
      <CardHeader className="border-b border-b-gray-200">
        <CardTitle className="text-t1 text-text-02 ">رمز عبور</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-b2 text-text-02 mb-6">
          رمز عبور شما باید حداقل 8 حرف باشد.
        </CardDescription>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-t3">
                    <span className="text-gray-400">رمز عبور جدید</span>
                    <span className="text-error-500 text-b2 font-semibold">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input className="bg-gray-50 w-[380px]" type="password" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between mt-9">
              <div className="max-w-[168px] w-full h-[6px] bg-[#D9D9D9] rounded-md"></div>
              <div className="max-w-[168px] w-full h-[6px] bg-[#D9D9D9] rounded-md"></div>
              <div className="max-w-[168px] w-full h-[6px] bg-[#D9D9D9] rounded-md"></div>
              <div className="max-w-[168px] w-full h-[6px] bg-[#D9D9D9] rounded-md"></div>
            </div>
            <ul className="text-[#919191] space-y-4 text-t3 list-disc list-outside marker:text-error-500">
              <li className="">رمز عبور شما باید حداقل 8 حرف باشد.</li>
              <li className="">شامل علامت (!@#$%^&*)</li>
              <li className="">شامل یک حرف بزرگ و کوچک</li>
            </ul>
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className=" text-t3">
                    <span className="text-gray-400">تکرار رمز عبور جدید</span>
                    <span className="text-error-500 text-b2 font-semibold">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input className="bg-gray-50 w-[380px]" type="password" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="py-2 px-8 text-white bg-primary-500">
              {form.formState.isSubmitting ? (
                <Loader className="animate-spin transition-all duration-200 size-6" />
              ) : (
                'تغییرات رمز عبور'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default ChangePassForm;
