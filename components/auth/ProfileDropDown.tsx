import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { auth } from '@/auth';
import { Logout, Profile, UserTick } from 'iconsax-reactjs';
import { SignOutBtn } from './signout-button';

async function ProfileDropDown() {
  const session = await auth();
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-primary-100">
          <span>
            <UserTick size="32" color="#1F7168" />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{session?.user?.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            حساب کاربری
            <DropdownMenuShortcut>
              <Profile size="32" color="#d9e3f0" variant="Bold" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem>
          <SignOutBtn />
          <DropdownMenuShortcut>
            <Logout size="32" color="#f47373" variant="Bold" />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ProfileDropDown;
