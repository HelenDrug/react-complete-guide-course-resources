import MealsHeader from '../../components/Meals/MealsHeader';
import Meals from '../../components/Meals/Meals';
import { getMeals } from '../../db/meals';

export default async function MealsPage() {
  const meals = await getMeals();
  return (
    <>
      <MealsHeader />
      <Meals meals={meals} />
    </>
  );
}
