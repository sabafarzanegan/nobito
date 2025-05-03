import React from 'react';
import UserLinks from './UserLinks';
import Uploadimg from './Uploadimg';

function SidebarUserProfile() {
  return (
    <aside className="p-6 max-w-[360px] max-h-[850px] w-full h-full rounded-lg bg-white border">
      <Uploadimg />
      <div></div>
      {/* list item */}
      <div>
        <UserLinks />
      </div>
    </aside>
  );
}

export default SidebarUserProfile;
