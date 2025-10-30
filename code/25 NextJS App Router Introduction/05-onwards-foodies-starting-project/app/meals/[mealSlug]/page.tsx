import MealDetails from '../../../components/Meals/Meal/MealDetails/MealDetails';

interface MealDetailsPageProps {
  params: {
    mealSlug: string;
  };
}
export default function MealDetailsPage({ params }: MealDetailsPageProps) {
  return <MealDetails mealSlug={params.mealSlug} />;
}
