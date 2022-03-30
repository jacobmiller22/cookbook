import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useReducer,
  useState,
} from "react";
import { MODAL_VARIANT } from "interfaces";
import { profileReducer } from "reducers";
import { Profile } from "interfaces/Member";
import { getMemberByUsername } from "lib/member";
import { useRouter } from "next/router";
import { QuantifiedIngredient, Recipe } from "interfaces/Recipe";
import { getRecipes } from "lib/recipes";
import { ServiceResponse } from "lib/http";
import { useSnackbar } from "notistack";

export type TRecipesCtx = {
  recipes: Recipe[];
  isLoading: boolean;
  ingredients: QuantifiedIngredient[];
  setIngredients: Dispatch<SetStateAction<QuantifiedIngredient[]>>;
};

export const RecipeCtx = createContext<TRecipesCtx>(null);

const initialState = null;

const RecipeProvider = ({ children }) => {
  // const [test, dispatch] = useReducer(profileReducer, initialState);
  // const [ingredients, setIngredients] = useState<QuantifiedIngredient[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState<QuantifiedIngredient[]>([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    (async () => {
      const response: ServiceResponse<Recipe[]> = await getRecipes({
        ingredients,
      });
      if (response.success) {
        setRecipes(response.data || []);
      } else {
        // Display error notification
        enqueueSnackbar("Could not load recipes", { variant: "error" });
      }
      setIsLoading(false);
    })();
  }, [ingredients]);

  return (
    <RecipeCtx.Provider
      value={{ recipes, isLoading, ingredients, setIngredients }}
    >
      {children}
    </RecipeCtx.Provider>
  );
};
export default RecipeProvider;
