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