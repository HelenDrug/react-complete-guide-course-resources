import classes from './MealContent.module.css';
import Link from 'next/link';
import type { MealType } from '../../../shared/types';

type MealContentProps = Pick<MealType, 'summary' | 'slug'>;

export default function MealContent({ summary, slug }: MealContentProps) {
  return (
    <div className={classes.content}>
      <p className={classes.summary}>{summary}</p>
      <div className={classes.actions}>
        <Link href={`/meals/${slug}`}>View Details</Link>
      </div>
    </div>
  );
}
