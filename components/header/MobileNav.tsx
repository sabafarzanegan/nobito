import { HamburgerMenu } from 'iconsax-reactjs';
import Image from 'next/image';

function MobileNav() {
  return (
    <div className="block md:hidden">
      <HamburgerMenu size="24" color="#757575" variant="Outline" />
    </div>
  );
}

export default MobileNav;
