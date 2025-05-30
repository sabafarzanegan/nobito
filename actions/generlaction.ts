'use server';

import db from '@/db';

export const getUserImgbyEmail = async (email: string) => {
  try {
    const res = await db.user.findFirst({
      where: {
        email: email,
      },
      select: {
        profilepicture: true,
      },
    });
    return res;
  } catch (error) {}
};

export const getUserByEmail = async (email: string) => {
  try {
    const res = await db.user.findFirst({
      where: {
        email,
      },
    });
    return res;
  } catch (error) {}
};

export const addImgProfile = async ({ email, image }: { email: string; image: string }) => {
  try {
    const res = await db.user.update({
      data: {
        profilepicture: image,
      },
      where: {
        email: email,
      },
    });
    return { error: false, message: 'عکس شما با موفقیت بارگزاری شد' };
  } catch (error) {
    return { error: true, message: 'خطا در ارسال عکس دوباره تلاش کنید' };
  }
};

export const getDoctors = async () => {
  try {
    const res = await db.doctor.findMany({
      select: {
        doctorServices: true,
        name: true,
        address: true,
        expertise: true,
        id: true,
        profilePicture: true,
        bookingmethod: true,
        clinicfeature: true,
        description: true,
        location: true,
        phonenum: true,
        registrationnumber: true,
      },
    });
    return res;
  } catch (error) {}
};
