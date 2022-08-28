import { RecipeCtx, TRecipesCtx } from "lib/contexts/recipes";
import { useHookCtx } from ".";

const useRecipes = (): TRecipesCtx => {
  return useHookCtx<TRecipesCtx>(RecipeCtx);
};

export default useRecipes;
