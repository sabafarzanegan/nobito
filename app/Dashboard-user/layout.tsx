import { auth } from '@/auth';
import SidebarUserProfile from '@/components/dashboard-user/SidebarUserProfile';
import React, { ReactNode } from 'react';

async function layout({ children }: { children: ReactNode }) {
  const session = await auth();
  return (
    <section className="flex  justify-between px-28">
      <SidebarUserProfile />
      <main>{children}</main>
    </section>
  );
}

export default layout;
