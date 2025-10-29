import classes from './MealsGrid.module.css';
import type { Meals } from '../../shared/types';
import Meal from './Meal/Meal';

export default function MealsGrid({ meals }: Meals) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.slug}>
          <Meal {...meal} />
        </li>
      ))}
    </ul>
  );
}
