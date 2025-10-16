import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import Image from 'next/image';

export default function MainHeader() {
  return (
    <header>
      <Link href={'/'}>
        <Image src={logoImg.src} alt="Logo" width={200} height={200} />
        NextLevel Food
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={'/meals'}>Meals</Link>
          </li>
          <li>
            <Link href={'/community'}>Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
