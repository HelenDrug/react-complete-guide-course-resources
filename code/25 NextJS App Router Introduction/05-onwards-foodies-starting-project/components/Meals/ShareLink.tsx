import Link from 'next/link';
import classes from './ShareLink.module.css';

export default function ShareLink() {
  return (
    <div className={classes.cta}>
      <Link href={'/meals/share'}>Share a Meal!</Link>
    </div>
  );
}
