import { auth } from '@/auth';
import db from '@/db';
import { userInfoSchema } from '@/lib/schema/userprofileSchem';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const session = await auth();
    const body = await req.json(); // دریافت داده‌های JSON از درخواست

    const parsed = userInfoSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: 'اطلاعات نامعتبر است' }, { status: 400 });
    }

    const data = parsed.data;

    // داده‌ها را در دیتابیس ذخیره کن یا هر کار دیگری...
    console.log('✅ داده‌های معتبر فرم:', data);
    await db.user.update({
      where: {
        email: session?.user?.email!,
      },
      data: {
        name: data.name,
        familyname: data.familyname,
        code: data.code,
        phonenumber: data.phonenumber,
        city: data.city,
        state: data.state,
      },
    });

    return NextResponse.json({ message: 'اطلاعات با موفقیت ذخیره شد' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'خطا در سرور' }, { status: 500 });
  }
}
