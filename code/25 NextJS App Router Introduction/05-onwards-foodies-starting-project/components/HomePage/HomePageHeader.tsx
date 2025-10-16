import Link from 'next/link';
import SlideShow from '../SlideShow/SlideShow';
import type { ClassNameProps } from '../../shared/types';

export default function HomePageHeader({ classes }: ClassNameProps) {
  const { header, slideshow, hero, cta } = classes;
  return (
    <header className={header}>
      <div className={slideshow}>
        <SlideShow />
      </div>
      <div>
        <div className={hero}>
          <h1>Next Level Food for You! </h1>
          <p> Taste & Share food from all over the world.</p>
        </div>
        <div className={cta}>
          <Link href={'/community'}>Join the Community</Link>
          <Link href={'/meals'}>Explore Meals</Link>
        </div>
      </div>
    </header>
  );
}
