import classes from './MealsHeader.module.css';
import ShareLink from './ShareLink';

export default function MealsHeader() {
  const { header, highlight } = classes;
  return (
    <header className={header}>
      <h1>
        Delicious Meals created <span className={highlight}>by you</span>
      </h1>
      <p>Explore our collection of mouth-watering recipes!</p>
      <ShareLink />
    </header>
  );
}
