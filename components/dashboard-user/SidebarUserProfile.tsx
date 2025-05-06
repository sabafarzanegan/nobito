import React from 'react';
import UserLinks from './UserLinks';
import Uploadimg from './Uploadimg';
import { auth } from '@/auth';
import { getUserImgbyEmail } from '@/actions/generlaction';

async function SidebarUserProfile() {
  const session = await auth();
  const res = await getUserImgbyEmail(session?.user?.email as string);

  return (
    <aside className="p-4 max-w-[330px] max-h-[850px] w-full h-full rounded-lg bg-white border hidden md:block">
      <Uploadimg profilePicture={res?.profilepicture} email={session?.user?.email as string} />
      <div></div>
      {/* list item */}
      <div>
        <UserLinks />
      </div>
    </aside>
  );
}

export default SidebarUserProfile;
