import { getUserByEmail } from '@/actions/generlaction';
import { auth } from '@/auth';
import UserInfoForm from '@/components/dashboard-user/UserInfoForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

async function page() {
  const sessiom = await auth();
  const user = await getUserByEmail(sessiom?.user?.email as string);
  console.log(user);

  return (
    <Card className="p-6 bg-white rounded-lg w-full">
      <CardHeader className="border-b border-b-gray-200">
        <CardTitle className="text-t1 text-[#414141] font-normal">اطلاعات حساب کاربری</CardTitle>
      </CardHeader>
      <CardContent>
        <UserInfoForm userInfo={user} />
      </CardContent>
    </Card>
  );
}

export default page;
