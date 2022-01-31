export interface RecipeParams {
  ingredients: QuantifiedIngredient[];
}

export type Recipe = {
  id: string | number;
  name: string;
  ingredients: QuantifiedIngredient[];
  instructions: string;
  author: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  description: string;
};

export interface QuantifiedIngredient {
  name: string;
  amount?: number;
  unit?: string;
}
