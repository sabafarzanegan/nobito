import React from 'react';

function Address({
  address,
  phonenum,
}: {
  address: string | undefined;
  phonenum: string | undefined;
}) {
  return (
    <div className="mt-10 border-b border-b-gray-200 pb-[70px]">
      <h2 className="text-h2 text-[#414141] font-bold mb-10">موقعیت مکانی مطب</h2>
      <div className="space-y-4 mb-6">
        <p className="text-h3 text-[#414141] font-semibold">آدرس :</p>
        <p className="text-b1 leading-8 text-gray-500">{address}</p>
      </div>
      <div className="flex items-center gap-x-2">
        <p className="text-h3 text-[#414141] font-semibold">تلفن :</p>
        <span className="text-gray-500 text-b1">
          {Number(phonenum).toLocaleString('fa-IR', {
            useGrouping: false,
          })}
        </span>
      </div>
    </div>
  );
}

export default Address;
