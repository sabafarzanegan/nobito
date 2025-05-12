'use client';
import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import { UserprofileLinks } from '@/lib/helper';
import Link from 'next/link';

function BreadCrumbDash() {
  const urlParams = usePathname();

  const currentUrl = UserprofileLinks.find(link => link.link === urlParams.split('/')[2]);
  console.log(currentUrl);

  return (
    <Breadcrumb dir="rtl" className="w-full bg-primary-500 text-white py-3  px-4 md:px-28">
      <BreadcrumbList className="text-white text-b1">
        <BreadcrumbItem>
          <Link href="/">نوبیتو</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link href="/Dashboard-user">حساب شخصی</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="text-b1 font-bold">
          <BreadcrumbPage className="text-white">{currentUrl?.name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadCrumbDash;
