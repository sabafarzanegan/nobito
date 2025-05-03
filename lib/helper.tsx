import { Calendar, Key, LoginCurve, Message, User } from 'iconsax-reactjs';

export const NavLinks = [
  { id: 1, name: 'نوبت دهی مطب' },
  { id: 2, name: 'خدمات' },
  { id: 3, name: 'مشاوره آنلاین' },
  { id: 4, name: 'مجله سلامت' },
  { id: 5, name: 'نیکوکاری' },
];

export const subnavLinks = [
  { id: 1, name: 'درباره ما' },
  { id: 2, name: 'تماس با ما' },
  { id: 3, name: 'سوالات متداول' },
  { id: 4, name: ' انتخاب آدرس' },
];

export const UserprofileLinks = [
  {
    id: 1,
    name: 'اطلاعات حساب کاربری',
    link: '/user-info',
    icon: (color: string) => <User size="20" color={color} />,
  },
  {
    id: 2,
    name: 'تاریخچه نوبت ها',
    link: '/booking-history',
    icon: (color: string) => <Calendar size="20" color={color} />,
  },
  {
    id: 3,
    name: 'بازخوردها',
    link: '/comments',
    icon: (color: string) => <Message size="20" color={color} />,
  },
  {
    id: 4,
    name: 'رمز عبور',
    link: '/change-pass',
    icon: (color: string) => <Key size="20" color={color} />,
  },
];
