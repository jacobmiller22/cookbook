import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import { QuantifiedIngredient, Recipe } from "interfaces/Recipe";
import { getRecipes } from "lib/recipe";
import { ServiceResponse } from "lib/http";
import { useSnackbar } from "notistack";
import { getMemberRecipes } from "lib/recipe";

export type TRecipesCtx = {
  recipes: Recipe[];
  isLoading: boolean;
  ingredients: QuantifiedIngredient[];
  setIngredients: Dispatch<SetStateAction<QuantifiedIngredient[]>>;
};

export const RecipeCtx = createContext<TRecipesCtx>(null);

const RecipeProvider = ({ children, useRoute = false }) => {
  const router = useRouter();

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState<QuantifiedIngredient[]>([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (useRoute && !router.isReady) return;

    console.log("useRoute && !router.isReady", useRoute);

    (async () => {
      const response: ServiceResponse<Recipe[]> = await (useRoute
        ? getMemberRecipes(router.query.username as string, { ingredients })
        : getRecipes({
            ingredients,
          }));

      console.log("response", response);

      if (response.success) {
        setRecipes(response.data || []);
      } else {
        // Display error notification
        enqueueSnackbar("Could not load recipes", { variant: "error" });
      }
      setIsLoading(false);
    })();
  }, [ingredients, router.isReady]);

  return (
    <RecipeCtx.Provider
      value={{ recipes, isLoading, ingredients, setIngredients }}
    >
      {children}
    </RecipeCtx.Provider>
  );
};
export default RecipeProvider;
