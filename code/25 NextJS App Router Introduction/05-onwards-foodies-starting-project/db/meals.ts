import Database from 'better-sqlite3';
import type { MealType } from '../shared/types';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

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

export async function addMeal(meal: MealType) {
  const { title, image, summary, instructions, creator, creator_email } = meal;
  const slug = slugify(title, { lower: true });
  const cleanedInstructions = xss(instructions);
  const mealImage = image as File;

  const extension = mealImage.name.split('.').pop();
  const fileName = `${slug}.${extension}`;
  fs.createWriteStream(`public/images/${fileName}`).write(
    Buffer.from(await mealImage.arrayBuffer()),
    (error) => {
      if (error) {
        throw new Error('Error saving image');
      }
    }
  );
  const newImage = `/images/${fileName}`;
  db.prepare(
    'INSERT INTO meals (title, slug, image, summary, instructions, creator, creator_email) VALUES (?, ?, ?, ?, ?, ?, ?)'
  ).run(title, slug, newImage, summary, cleanedInstructions, creator, creator_email);
}
