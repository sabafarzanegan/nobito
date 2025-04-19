import Image from 'next/image';

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
          <div className=" text-t1 md:text-d2 text-white font-bold flex items-center justify-center flex-col mb-8 space-y-1.5">
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
