import UserInfoForm from '@/components/dashboard-user/UserInfoForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

function page() {
  return (
    <Card className="p-6 bg-white rounded-lg w-full">
      <CardHeader className="border-b border-b-gray-200">
        <CardTitle className="text-t1 text-[#414141] font-normal">اطلاعات حساب کاربری</CardTitle>
      </CardHeader>
      <CardContent>
        <UserInfoForm />
      </CardContent>
    </Card>
  );
}

export default page;
