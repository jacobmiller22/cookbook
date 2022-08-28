import { Box, Typography } from "@mui/material";
import { useProfile } from "lib/hooks";
import { RecipeList, IngredientPanel } from "lib/components/Recipe";
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
      <Box display="flex" height="100%">
        <Spacer />
        <Box display="flex">
          <Typography variant="body2">
            Showing {recipes.length || 0} recipes
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RecipeListView;
