import { Box } from "@mui/material";
import { useProfile } from "lib/hooks";
import {
  RecipeList,
  IngredientPanel,
  ResultsDescriptor,
} from "lib/components/Recipe";
import theme from "lib/theme";
import { Spacer } from "lib/components/Atomics";
import useRecipes from "lib/hooks/useRecipes";

type RecipeListViewProps = {};

const RecipeListView = ({}: RecipeListViewProps) => {
  const profile = useProfile();

  const { recipes, isLoading, ingredients, setIngredients } = useRecipes();

  console.log(recipes);

  return (
    <Box width="100%" maxWidth={theme.layout.contentWidth}>
      <IngredientPanel
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
      <RecipeList recipes={recipes} isLoading={isLoading} />
      <Box display="flex">
        <Spacer />
        <ResultsDescriptor
          results={{ displayed: recipes.length, total: recipes.length }}
        />
      </Box>
    </Box>
  );
};

export default RecipeListView;
