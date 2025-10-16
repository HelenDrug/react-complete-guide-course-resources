import Link from 'next/link';
import logoImg from '../../assets/logo.png';
import classes from './MainHeader.module.css';
import Image from 'next/image';
import MainHeaderBackground from './MainHeaderBackground';
import MainHeaderNavigation from './MainHeaderNavigation';

export default function MainHeader() {
  const { header, logo } = classes;
  return (
    <>
      <MainHeaderBackground />
      <header className={header}>
        <Link className={logo} href={'/'}>
          <Image src={logoImg} alt="Logo" priority />
          NextLevel Food
        </Link>
        <MainHeaderNavigation />
      </header>
    </>
  );
}
