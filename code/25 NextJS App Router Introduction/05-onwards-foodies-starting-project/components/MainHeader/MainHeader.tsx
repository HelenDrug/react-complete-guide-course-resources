import Link from 'next/link';
import logoImg from '../../assets/logo.png';
import classes from './MainHeader.module.css';
import Image from 'next/image';
import MainHeaderBackground from './MainHeaderBackground';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href={'/public'}>
          <Image src={logoImg} alt="Logo" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
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
    </>
  );
}
