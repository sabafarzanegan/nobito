import Navbar from './Navbar';
import SubNav from './SubNav';

function Header() {
  return (
    <header className="w-full px-4 md:px-28">
      <Navbar />
      <SubNav />
    </header>
  );
}

export default Header;
