export interface Recipe {
  id: number;
  title: string;
  description: string;
  calories: number;
  protein: number;
  prepTime: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  benefits: string[];
  image: string;
}
