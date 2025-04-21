import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <div className="flex gap-x-2 items-center">
      <Link href="/">
        <div>
          <Image
            src="/images/Logo-1.svg"
            width={65}
            height={61}
            alt="logo"
            className="w-[48px] h-[45px] md:w-[65px] md:h-[61px]"
          />
        </div>
      </Link>

      <div>
        <div>
          <Image
            src="/images/نوبیتو.svg"
            alt="brand"
            width={62}
            height={29}
            className="w-[40px] h-[21px] md:w-[62px] md:h-[29px]"
          />
        </div>
        <p className="mt-3 text-[#515151] font-semibold  text-tiny md:text-md">
          پلتفرم آنلاین رزرو نوبت
        </p>
      </div>
    </div>
  );
}

export default Logo;
