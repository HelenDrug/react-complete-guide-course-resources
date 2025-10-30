import MealsGrid from './MealsGrid';
import { getMeals } from '../../db/meals';

export default async function Meals() {
  const meals = await getMeals();

  return (
    <main>
      <MealsGrid meals={meals} />
    </main>
  );
}
