import React from 'react';
import { Button } from '../ui/button';
import { ArrowLeft } from 'iconsax-reactjs';

function Comment() {
  return (
    <div className="mt-10 space-y-10">
      <h2 className="text-h2 text-[#414141] font-bold ">تجربیات کاربران</h2>
      <p className="text-gray-500 text-b2 leading-6">
        در ادامه می‌توانید تجربه مراجعه‌ی کاربران دیگر به دکتر بهروز مقدادی را بخوانید.در صورتی که
        شما هم از بیماران دکتر بهروز مقدادی بوده‌اید می‌توانید نظر خود را ثبت کنید.
      </p>
      <div className="flex items-center justify-end">
        <Button className="px-6 py-3 bg-primary-500 ">
          <p>ثبت بازخورد</p>
          <p>
            <ArrowLeft size="32" color="#ffffff" />
          </p>
        </Button>
      </div>
    </div>
  );
}

export default Comment;
