'use client';
import { UserprofileLinks } from '@/lib/helper';
import { LoginCurve } from 'iconsax-reactjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignOutBtn } from '../auth/signout-button';
import { signOutForm } from '@/actions/formaction';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Card, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

function UserLinks() {
  const searchUrl = usePathname();
  console.log(searchUrl);

  return (
    <ul>
      {UserprofileLinks.map(item => {
        const isActive = searchUrl.includes(item.link);
        const iconColor = isActive ? 'rgb(31, 113, 104)' : '#414141';

        return (
          <Link key={item.id} href={`/Dashboard-user/${item.link}`} className="">
            <li className="flex items-center gap-x-2 text-b2  py-6  border-y border-y-gray-200">
              {item.icon(iconColor)}
              <span className={`${isActive ? 'text-primary-500' : 'text-Black-400'} `}>
                {item.name}
              </span>
            </li>
          </Link>
        );
      })}
      <Dialog modal={true}>
        <DialogTrigger>
          <li className="flex items-center gap-x-2 text-b2  py-6  cursor-pointer">
            <LoginCurve size="20" color="#414141" />
            <span className={`text-Black-400  hover:text-red-700`}>خروج از حساب کاربری</span>
          </li>
        </DialogTrigger>
        <DialogContent className="p-8">
          <DialogHeader className="border-b pb-4">
            <DialogTitle>خروج از حساب کاربری</DialogTitle>
          </DialogHeader>
          <div className="mt-8">
            <p className="text-gray-500">
              با خروج از حساب کاربریتان به اطلاعاتی که وارد کردید دسترسی نخواهید داشت و باید مجددا
              وارد شوید
            </p>
          </div>
          <DialogFooter>
            <Button onClick={signOutForm} className="bg-primary-500 text-white">
              خروج از حساب
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ul>
  );
}

export default UserLinks;
