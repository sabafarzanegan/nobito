This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## install shadcn ui

npx shadcn@latest init

# header section
### Header Structure

- Header.tsx: ساختار اصلی هدر
- Navbar.tsx: نوار ناوبری بالا
  -  Logo, Menu, SignUpBtn, MobileNav
- SubNav.tsx: زیرمنو

استفاده در صفحه اصلی (page):
import Navbar from './Navbar';
import SubNav from './SubNav';

```bash
function Header() {
return (

<header className="w-full px-4 md:px-28">
  <Navbar />
  <SubNav />
</header>
);
}

export default Header;
```


# Navbar component in header

### navbar Structure
Logo:شامل تصویر لوگو و نوشته های اطراف
Menu: شامل لینک های منو در دسکتاپ
SignUpBtn:لینک ورود و ثبت نام
MobileNav:آیکون همبرگری و کامپوننت sheet shadcn ui
```bash
function Navbar() {
  return (
    <nav className="py-6 border-b border-b-gray-200 w-full flex items-center justify-between">
      <Logo />
      <Menu />
      <div className="flex items-center">
        <SignUpBtn />
        {/* mobile nav */}
        <MobileNav />
      </div>
    </nav>
  );
}
```


# landing section

```bash
function Landing() {
  return (
    <div className="bg-[url(/images/Banner.svg)] bg-center bg-no-repeat bg-cover mx-auto w-full h-[292px] md:h-[382px] flex items-center justify-center">
      <div>
        <div className="flex items-center justify-center flex-col gap-y-[5px]">
          <div className=" self-start">
            <Image
              src="/images/“.svg"
              width={26}
              height={24}
              alt='"'
              className="w-[18px] h-[18px] md:w-[26px] md:h-[24px]"
            />
          </div>
          <div className=" text-t1 md:text-d2 text-white font-bold flex items-center justify-center flex-col  space-y-1.5">
            <p>
              تلاش ما دسترسی{' '}
              <span className="bg-secondary-200 text-primary-500 rounded-md px-2">
                سریعتر و آسان{' '}
              </span>
            </p>
            <p>تر شما به خدمات پزشکی است):</p>
          </div>
          <div className="self-end-safe">
            <Image
              src="/images/“ (1).svg"
              width={26}
              height={24}
              alt='"'
              className="w-[18px] h-[18px] md:w-[26px] md:h-[24px]"
            />
          </div>
        </div>

        <div className="text-white text-tiny md:text-b1 flex items-center justify-center flex-col space-y-1.5">
          <p className="text-center">کافیست خدمات درمانی موردنظر خود را جستجو کنید</p>
          <p className="text-center">(دریافت نوبت،مشاوره پزشکی،خدمات پزشکی در منزل)</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
```

# add searchbar to landing page
```bash
import React from 'react';

function SearchBar() {
  return (
    <div className="flex items-center bg-white border border-primary-300 rounded-xl overflow-hidden shadow-md px-2 py-1  w-ful mx-auto">
      {/* دکمه انتخاب شهر */}
      <button className="flex items-center gap-1 px-3 py-2 text-tiny  text-primary-500 border-e border-dotted border-gray-300">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
          />
        </svg>
        انتخاب شهر
      </button>

      {/* فیلد سرچ */}
      <input
        type="text"
        placeholder="جستجو پزشک،درمانگر،کلینیک..."
        className="flex-1 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none text-right"
      />

      {/* آیکون سرچ */}
      <div className="px-2 text-gray-500">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
          />
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
```