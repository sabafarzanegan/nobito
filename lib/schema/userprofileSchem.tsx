import { z } from 'zod';

export const userInfoSchema = z.object({
  name: z.string().min(2, 'حداقل 2 حرف'),
  familyname: z.string().min(2, 'حداقل 2 حرف'),
  code: z.string().min(4, 'کد ملی نامعتبر'),
  phonenumber: z.string().min(8, 'شماره تماس نامعتبر است'),
  city: z.string().min(1, 'شهر خودرا انتخاب کنید'),
  state: z.string().min(1, 'استان خور را انتخاب کنید'),
});
