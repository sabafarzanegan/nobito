'use client';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
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
import { zodResolver } from '@hookform/resolvers/zod';
import { userInfoSchema } from '@/lib/schema/userprofileSchem';
import { z } from 'zod';
import { Loader } from 'lucide-react';
import { toast } from 'sonner';

function UserInfoForm() {
  const form = useForm<z.infer<typeof userInfoSchema>>({
    resolver: zodResolver(userInfoSchema),
    defaultValues: {
      name: '',
      familyname: '',
      code: '',
      phonenumber: '',
      city: '',
      state: '',
    },
  });

  async function onSubmit(values: z.infer<typeof userInfoSchema>) {
    try {
      const res = await fetch('/api/user-info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const error = await res.json();
        toast.error(error.error || 'ارسال ناموفق بود.');
        return;
      }
      const result = await res.json();
      console.log(result);

      toast.success(result.message);
    } catch (error) {
      toast.error('مشکلی پیش آمده است.');
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 grid grid-cols-1 md:grid-cols-2 gap-x-6 "
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-t3 text-gray-400 ">نام</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} className="bg-gray-50" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="familyname"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="text-t3 text-gray-400">نام خانوادگی</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} className="bg-gray-50" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-t3 text-gray-400">کد ملی</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} className="bg-gray-50" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phonenumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-t3 text-gray-400">شماره تماس</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} className="bg-gray-50" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-t3 text-gray-400">استان</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} className="bg-gray-50" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-t3 text-gray-400 ">شهر</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} className="bg-gray-50" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="md:col-span-full flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-l2 text-primary-500 flex-1">
            برای تغییر هر بخش از اطلاعات کافی است به روی آن کلیک کنید و پس از اعمال تغییرات بر روی
            دکمه ذخیره کلیک کنید
          </p>
          <Button type="submit" className="bg-primary-500 w-full md:w-[124px] text-white shrink-1">
            {form.formState.isSubmitting ? (
              <Loader className="animate-spin transition-all duration-200 size-6" />
            ) : (
              'ذخیره تغییرات'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default UserInfoForm;
