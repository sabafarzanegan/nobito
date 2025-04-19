import { subnavLinks } from '@/lib/helper';
import { Instagram, Send2, Youtube } from 'iconsax-reactjs';
import Link from 'next/link';

function SubNav() {
  return (
    <div className="my-6  items-center justify-between hidden md:flex">
      {/* social icon */}
      <div className="flex items-center gap-x-4">
        <Instagram size="24" color="#757575" variant="Outline" className="cursor-pointer" />
        <Send2 size="24" color="#757575" variant="Outline" />
        <Youtube size="24" color="#757575" variant="Outline" />
      </div>
      {/* sociallinks */}
      <div>
        <ul className="flex items-center gap-x-6">
          {subnavLinks.map(link => (
            <Link href="/" key={link.id}>
              <li className="text-t2 text-gray-500">{link.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SubNav;
