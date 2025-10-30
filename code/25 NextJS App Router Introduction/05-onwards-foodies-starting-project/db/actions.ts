import type { MealType } from '../shared/types';
import { addMeal } from './meals';
import { redirect } from 'next/navigation';

export const shareMeal = async (formData: FormData) => {
  'use server';
  const meal: MealType = {
    title: formData.get('title') as string,
    summary: formData.get('summary') as string,
    instructions: formData.get('instructions') as string,
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
    image: formData.get('image') as File,
  };
  await addMeal(meal);
  redirect('/meals');
};
