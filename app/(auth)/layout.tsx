import { auth } from '@/auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

async function layout({ children }: { children: ReactNode }) {
  const session = await auth();
  if (session?.user?.id) {
    redirect('/');
  }
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
