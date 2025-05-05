'use client';
import { addImgProfile } from '@/actions/generlaction';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

function Uploadimg({
  profilePicture = '/image/pic.svg',
  email,
}: {
  profilePicture: string | undefined | null;
  email: string;
}) {
  const [prevImg, setPrevImg] = useState<string>('');
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();
  const handelfilechnge = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPrevImg(URL.createObjectURL(file));

    setIsloading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'unsigned-upload');
    formData.append('cloud_name', 'dko1fxu7r');

    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/dko1fxu7r/image/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (!data) {
        return toast.error('خطا در بارگزاری تصویر');
      }
      const result = await addImgProfile({ email, image: data.secure_url });

      if (!result.error) {
        router.refresh();
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('مشکلی در آپلود تصویر پیش آمد.');
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div className="relative mb-[50px]">
      <div>
        <Image src="/images/profile pic.svg" width={336} height={120} alt="profile back" />
      </div>
      <div className="absolute   left-1/2 translate-x-[-50%] bottom-[10px] ">
        <label className="cursor-pointer" htmlFor="upload-file">
          <Image
            src={`${isLoading ? prevImg : profilePicture}`}
            width={120}
            height={120}
            alt="profile picture"
            className={`rounded-full w-[120px] h-[120px] ${isLoading && 'opacity-65'}`}
          />
        </label>

        <input
          type="file"
          className="hidden"
          id="upload-file"
          accept="image/*"
          onChange={handelfilechnge}
        />

        {isLoading && <p className="text-sm text-gray-500 mt-2 text-center">در حال آپلود...</p>}
      </div>
    </div>
  );
}

export default Uploadimg;
