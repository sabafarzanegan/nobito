import { auth } from '@/auth';
import SidebarUserProfile from '@/components/dashboard-user/SidebarUserProfile';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react';

async function layout({ children }: { children: ReactNode }) {
  const session = await auth();
  if (!session?.user) {
    redirect('/login');
  }
  return (
    <section className="flex gap-x-5 px-4 md:px-28 mt-[100px] py-6">
      <SidebarUserProfile />
      <main className="flex-1/2">{children}</main>
    </section>
  );
}

export default layout;
