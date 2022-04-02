import { Box } from "@mui/material";
import { useProfile } from "hooks";
import {
  RecipeList,
  IngredientPanel,
  ResultsDescriptor,
} from "components/Recipe";
import theme from "theme";
import { Spacer } from "components/Atomics";
import useRecipes from "hooks/useRecipes";

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
