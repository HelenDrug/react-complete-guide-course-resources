import Database from 'better-sqlite3';
import type { MealType } from '../shared/types';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const db: Database.Database = new Database('meals.db');

export async function getMeals(): Promise<MealType[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  return db.prepare('SELECT * FROM meals').all() as MealType[];
}

export function getMeal(mealSlug: string): MealType {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(mealSlug) as MealType;
}
