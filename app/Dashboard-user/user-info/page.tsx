import UserInfoForm from '@/components/dashboard-user/UserInfoForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

function page() {
  return (
    <Card className="p-6 bg-white rounded-lg">
      <CardHeader className="border-b border-b-gray-500">
        <CardTitle className="text-t1 text-gray-500">اطلاعات حساب کاربری</CardTitle>
      </CardHeader>
      <CardContent>
        <UserInfoForm />
      </CardContent>
    </Card>
  );
}

export default page;
