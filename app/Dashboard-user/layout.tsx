import { auth } from '@/auth';
import BreadCrumbDash from '@/components/dashboard-user/BreadCrumbDash';
import SidebarUserProfile from '@/components/dashboard-user/SidebarUserProfile';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react';

async function layout({ children }: { children: ReactNode }) {
  const session = await auth();
  if (!session?.user) {
    redirect('/login');
  }
  return (
    <div>
      <BreadCrumbDash />
      <section className="flex gap-x-5 mt-[100px] px-4 md:px-28 py-6">
        <SidebarUserProfile />
        <main className="flex-1/2">{children}</main>
      </section>
    </div>
  );
}

export default layout;
