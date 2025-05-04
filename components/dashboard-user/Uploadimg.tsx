'use client';
import { addImgProfile } from '@/actions/generlaction';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

function Uploadimg({
  profilePicture,
  email,
}: {
  profilePicture: string | undefined | null;
  email: string;
}) {
  const [image, setImage] = useState<File | null>(null);
  const [prevImg, setPrevImg] = useState<string>('/images/pic.svg');
  const router = useRouter();
  const handelfilechnge = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const newPrevUrl = URL.createObjectURL(file);
      setImage(file);
      setPrevImg(newPrevUrl);
    }
  };

  const handelupload = async () => {
    if (!image?.name) return;
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'unsigned-upload');
    formData.append('cloud_name', 'dko1fxu7r');

    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/dko1fxu7r/image/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      console.log(data);

      if (!data) return;
      setImage(null);
      const resultes = await addImgProfile({ email: email, image: data.secure_url });
      if (resultes.error) {
        toast.error(resultes.message);
      } else {
        router.refresh();
        toast.success(resultes.message);
      }
    } catch (error) {
      console.error('Error uploading image: ', error);
      return null;
    }
  };

  useEffect(() => {
    handelupload();
  }, [image]);
  return (
    <div className="relative mb-[50px]">
      <div>
        <Image src="/images/profile pic.svg" width={336} height={120} alt="profile back" />
      </div>
      <div className="absolute   left-1/2 translate-x-[-50%] bottom-[10px] ">
        <label className="cursor-pointer" htmlFor="upload-file">
          <Image
            src={profilePicture || prevImg}
            width={120}
            height={120}
            alt="profile picture"
            className="rounded-full w-[120px] h-[120px]"
          />
        </label>
        <input
          type="file"
          className="hidden"
          id="upload-file"
          accept="image/*"
          onChange={handelfilechnge}
        />
      </div>
    </div>
  );
}

export default Uploadimg;
