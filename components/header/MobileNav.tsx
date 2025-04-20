import { HamburgerMenu } from 'iconsax-reactjs';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';

import { NavLinks } from '@/lib/helper';
import Link from 'next/link';
import SignUpBtn from '../auth/SignUpBtn';
import { Button } from '../ui/button';

function MobileNav() {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger>
          <HamburgerMenu size="24" color="#757575" />
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <ul className="flex  justify-center flex-col gap-y-5 mt-2 px-3 border-b-2 border-b-gray-300 py-3.5">
            {NavLinks.map(link => (
              <Link className="text-t2 text-gray-600" href="/" key={link.name}>
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
          <div className="px-4">
            <Button className="text-white px-5 py-3 bg-primary-500 ">ورود/ثبت نام</Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav;
