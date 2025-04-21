import Link from 'next/link';
import { Button } from '../ui/button';

function SignUpBtn() {
  return (
    <Button asChild className="text-white px-5 py-3 bg-primary-500 hidden md:inline-flex">
      <Link href="/login">ورود/ثبت نام</Link>
    </Button>
  );
}

export default SignUpBtn;
