import type { MealType } from '../../../shared/types';

import classes from './Meal.module.css';
import MealHeader from './MealHeader';
import MealContent from './MealContent';

export default function Meal({ title, slug, image, summary, creator }: MealType) {
  return (
    <article className={classes.meal}>
      <MealHeader title={title} image={image} creator={creator} />
      <MealContent slug={slug} summary={summary} />
    </article>
  );
}
