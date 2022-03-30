import { RecipeCtx } from "contexts/recipes";
import { Profile } from "interfaces/Member";
import { DispatchWithoutAction } from "react";
import { useHookCtx } from ".";

const useRecipes = (): any => {
  const value = useHookCtx(RecipeCtx);
  return value;
};

export default useRecipes;
