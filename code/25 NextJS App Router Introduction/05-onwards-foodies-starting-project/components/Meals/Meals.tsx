import MealsGrid from './MealsGrid';
import type { Meals } from '../../shared/types';

export default function Meals({ meals }: Meals) {
  return (
    <main>
      <MealsGrid meals={meals} />
    </main>
  );
}
