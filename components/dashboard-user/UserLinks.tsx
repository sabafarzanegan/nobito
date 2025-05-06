'use client';
import { UserprofileLinks } from '@/lib/helper';
import { LoginCurve } from 'iconsax-reactjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignOutBtn } from '../auth/signout-button';
import { signOutForm } from '@/actions/formaction';

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

      <li onClick={signOutForm} className="flex items-center gap-x-2 text-b2  py-6  cursor-pointer">
        <LoginCurve size="20" color="#414141" />
        <span className={`text-Black-400  hover:text-red-700`}>خروج از حساب کاربری</span>
      </li>
    </ul>
  );
}

export default UserLinks;
