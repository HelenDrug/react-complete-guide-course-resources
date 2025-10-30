import MealDetailsHeader from './MealDetailsHeader';
import MealDetailsContent from './MealDetailsContent';
import { getMeal } from '../../../../db/meals';
import { notFound } from 'next/navigation';

export default function MealDetails({ mealSlug }: { mealSlug: string }) {
  const meal = getMeal(mealSlug);

  if (!meal) {
    notFound();
  }

  return (
    <>
      <MealDetailsHeader meal={meal} />
      <MealDetailsContent instructions={meal.instructions} />
    </>
  );
}
