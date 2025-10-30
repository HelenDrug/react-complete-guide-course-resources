import classes from './ShareMealHeader.module.css';

export default function ShareMealHeader() {
  const { header, highlight } = classes;
  return (
    <header className={header}>
      <h1>
        Share your <span className={highlight}>favorite meal</span>
      </h1>
      <p>Or any other meal you feel needs sharing!</p>
    </header>
  );
}
