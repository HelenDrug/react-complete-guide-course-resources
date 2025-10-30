import classes from './MealDetailsHeader.module.css';
import Image from 'next/image';
import type { MealType } from '../../../../shared/types';

interface MealDetailsHeaderProps {
  meal: MealType;
}
export default function MealDetailsHeader({ meal }: MealDetailsHeaderProps) {
  const { header, image, headerText, creator, summary } = classes;
  const {
    title: mealTitle,
    image: mealImage,
    summary: mealSummary,
    creator: mealCreator,
    creator_email,
  } = meal;

  return (
    <header className={header}>
      <div className={image}>
        <Image src={mealImage} alt={mealTitle} fill />
      </div>
      <div className={headerText}>
        <h1>{mealTitle}</h1>
        <p className={creator}>
          by <a href={`mailto:${creator_email}`}>{mealCreator}</a>
        </p>
        <p className={summary}>{mealSummary}</p>
      </div>
    </header>
  );
}
