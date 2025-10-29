import classes from './Meal.module.css';
import Image from 'next/image';
import type { MealType } from '../../../shared/types';

type MealHeaderProps = Pick<MealType, 'image' | 'title' | 'creator'>;

export default function MealHeader({ image, title, creator }: MealHeaderProps) {
  return (
    <header>
      <div className={classes.image}>
        <Image src={image} alt={title} fill />
      </div>
      <div className={classes.headerText}>
        <h2>{title}</h2>
        <p>by {creator}</p>
      </div>
    </header>
  );
}
