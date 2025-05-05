import { auth } from '@/auth';
import SidebarUserProfile from '@/components/dashboard-user/SidebarUserProfile';
import React, { ReactNode } from 'react';

async function layout({ children }: { children: ReactNode }) {
  const session = await auth();
  return (
    <section className="flex gap-x-5 px-4 md:px-28 mt-[100px]">
      <SidebarUserProfile />
      <main className="flex-1/2">{children}</main>
    </section>
  );
}

export default layout;
