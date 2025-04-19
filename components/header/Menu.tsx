import { NavLinks } from '@/lib/helper';
import Link from 'next/link';

function Menu() {
  return (
    <div>
      <ul className="hidden md:flex items-center gap-x-6">
        {NavLinks.map(link => (
          <Link href="/" key={link.id}>
            <li className="text-t2  text-gray-500">{link.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
