export interface ClassNameProps {
  classes: { [key: string]: string };
}

export interface MealType {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

export interface Meals {
  meals: MealType[];
}
