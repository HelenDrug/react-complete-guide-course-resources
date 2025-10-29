import MealsHeader from '../../components/Meals/MealsHeader';
import Meals from '../../components/Meals/Meals';
import { Suspense } from 'react';
import LoadingPage from './loading-out';

export default function MealsPage() {
  return (
    <>
      <MealsHeader />
      <Suspense fallback={<LoadingPage />}>
        <Meals />
      </Suspense>
    </>
  );
}
