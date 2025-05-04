import React from 'react';
import UserLinks from './UserLinks';
import Uploadimg from './Uploadimg';
import { auth } from '@/auth';
import { getUserImgbyEmail } from '@/actions/generlaction';

async function SidebarUserProfile() {
  const session = await auth();
  const res = await getUserImgbyEmail(session?.user?.email!);

  return (
    <aside className="p-6 max-w-[360px] max-h-[850px] w-full h-full rounded-lg bg-white border">
      <Uploadimg profilePicture={res?.profilepicture} email={session?.user?.email!} />
      <div></div>
      {/* list item */}
      <div>
        <UserLinks />
      </div>
    </aside>
  );
}

export default SidebarUserProfile;
