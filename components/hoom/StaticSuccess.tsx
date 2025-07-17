import React from 'react';

function StaticSuccess() {
  return (
    <div className="relative w-full my-[144px] px-4">
      <div className=" max-w-[400px] md:max-w-[700px] lg:max-w-[1200px] w-full h-8 clip-path-right bg-primary-500"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[141px] gap-y-[40px] py-[18px]  max-w-[900px] w-full mx-auto">
        <div className="mx-auto space-y-3 flex items-center justify-center flex-col">
          <p className="font-vazir font-bold text-[#414141] text-t1">۳۰,۰۰۰+</p>
          <span className="text-gray-500 text-t3">پزشک آماده به خدمت</span>
        </div>

        <div className="mx-auto space-y-3 flex items-center justify-center flex-col">
          <p className="font-vazir font-bold text-[#414141] text-t1">۱۰٬۰۰۰+</p>
          <span className="text-gray-500 text-t3">درمانگر سیار</span>
        </div>

        <div className="mx-auto space-y-3 flex items-center justify-center flex-col">
          <p className="font-vazir font-bold text-[#414141] text-t1">۴۰,۰۰۰+</p>
          <span className="text-gray-500 text-t3">نوبت دهی روزانه</span>
        </div>

        <div className="mx-auto space-y-3 flex items-center justify-center flex-col">
          <p className="font-vazir font-bold text-[#414141] text-t1">۱۵,۰۰۰+</p>
          <span className="text-gray-500 text-t3">مراکز درمانی</span>
        </div>
      </div>

      <div className=" max-w-[400px] md:max-w-[700px] lg:max-w-[1200px] w-full absolute left-0 h-8 clip-path-left bg-primary-500"></div>
    </div>
  );
}

export default StaticSuccess;
