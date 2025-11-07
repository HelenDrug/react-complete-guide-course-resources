'use server';
import type { MealType } from '../shared/types';
import { addMeal } from './meals';
import { redirect } from 'next/navigation';
import { isInvalidText } from '../shared/isInvalidText';
import { isInvalidImage } from '../shared/isInvalidImage';
import { isInvalidEmail } from '../shared/isInvalidEmail';
import { revalidatePath } from 'next/cache';

const validateMealData = (meal: MealType) => {
  const { title, summary, instructions, creator, creator_email, image } = meal;
  if (
    isInvalidText(title) ||
    isInvalidText(summary) ||
    isInvalidText(instructions) ||
    isInvalidText(creator) ||
    isInvalidText(creator_email) ||
    isInvalidEmail(creator_email) ||
    isInvalidImage(image as File)
  ) {
    throw new Error('Invalid meal data');
  }
};

export const shareMeal = async (formData: FormData) => {
  const meal: MealType = {
    title: formData.get('title') as string,
    summary: formData.get('summary') as string,
    instructions: formData.get('instructions') as string,
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
    image: formData.get('image') as File,
  };
  validateMealData(meal);
  await addMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
};
