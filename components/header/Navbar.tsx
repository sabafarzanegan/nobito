import { auth } from '@/auth';
import SignUpBtn from '../auth/SignUpBtn';
import Logo from './Logo';
import Menu from './Menu';
import MobileNav from './MobileNav';
import ProfileDropDown from '../auth/ProfileDropDown';

async function Navbar() {
  const session = await auth();
  console.log(session);

  return (
    <nav className="py-6 border-b border-b-gray-200 w-full flex items-center justify-between">
      <Logo />
      <Menu />
      <div className="flex items-center gap-x-1">
        {/* mobile nav */}
        <MobileNav />
        {session?.user?.id ? <ProfileDropDown /> : <SignUpBtn />}
      </div>
    </nav>
  );
}

export default Navbar;
