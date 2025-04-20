import SignUpBtn from '../auth/SignUpBtn';
import Logo from './Logo';
import Menu from './Menu';
import MobileNav from './MobileNav';

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

export default Navbar;
