import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { ReactNode } from 'react';

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-svh flex items-center justify-center flex-col relative">
      <div></div>
      <div>
        <Image width={1440} height={300} src="/images/Bannerlogin.svg" alt="banner" />
      </div>
      <div className="absolute w-[80%] md:w-[50%]">{children}</div>
    </div>
  );
}

export default layout;
