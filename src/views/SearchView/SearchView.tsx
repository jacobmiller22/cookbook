import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { newRecipeRoute } from "routes";
/** Interfaces/types */

/** components */
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { QuantifiedIngredient, Recipe } from "interfaces/Recipe";
import { Spacer } from "components/Atomics";
import { RecipeList, IngredientPanel, ResultsDescriptor } from "./components";
import { getRecipes } from "lib/recipes";
import theme from "theme";
import AddIcon from "@mui/icons-material/Add";

interface ISearchViewProps {}

const SearchView = ({}: ISearchViewProps) => {
  const router = useRouter();

  const [ingredients, setIngredients] = useState<QuantifiedIngredient[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const newRecipes = await getRecipes({ ingredients });
      setRecipes(newRecipes.data);
      setIsLoading(false);
    })();
  }, [ingredients]);

  const handleAddRecipe = () => {
    console.log("add recipe");
    router.push(newRecipeRoute.path);
  };

  return (
    <React.Fragment>
      <Box
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        sx={{
          paddingInline: "0 !important",
          paddingTop: "2rem",
          marginBottom: "-3rem",
          backgroundColor: (theme) => theme.palette.secondary.main,
        }}
      >
        <Box
          display="flex"
          justifyContent="flex-start"
          sx={{ maxWidth: theme.layout.contentWidth, paddingBottom: "4rem" }}
          width="100%"
          flexDirection="row"
        >
          <Spacer />
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleAddRecipe}
          >
            Add Recipe
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{ maxWidth: theme.layout.contentWidth }}
        height="100%"
        width="100%"
      >
        <Box>
          <IngredientPanel
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        </Box>
        <Box display="flex" flexDirection="column" sx={{ height: "100%" }}>
          <RecipeList recipes={recipes} isLoading={isLoading} />
          <Spacer />
          <ResultsDescriptor
            results={{ total: 10, displayed: 10 }}
            justifyContent="flex-end"
          />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default SearchView;

const trecipes: Recipe[] = [
  {
    id: 1,
    name: "Pulled Pork BBQ",
    ingredients: [
      { name: "apple cider vinegar", amount: 0.5, unit: "cup" },
      { name: "chicken broth", amount: 0.5, unit: "cup" },
      { name: "vegetable oil", amount: 1, unit: "teaspoon" },
      { name: "pork tenderloin", amount: 2, unit: "" },
      { name: "barbeque sauce", amount: 1, unit: "cup" },
      { name: "light brown sugar", amount: 0.25, unit: "cup" },
      { name: "yellow mustard", amount: 1, unit: "tablespoon" },
      { name: "worcestershire sauce", amount: 1, unit: "tablespoon" },
    ],
    instructions: "Pour the vegetable oil",
    author: "Jacob Miller",
    prepTime: "15 minutes",
    cookTime: "5 hours",
    servings: 8,
    description:
      "Texas-style pulled pork simmers in a tangy chili-seasoned barbeque sauce with plenty of onion, then pulled into tender shreds to serve on a buttered, toasted bun.",
  },
  {
    id: 2,
    name: "Pasta Sauce",
    ingredients: [
      { name: "apple cider vinegar", amount: 0.5, unit: "cup" },
      { name: "chicken broth", amount: 0.5, unit: "cup" },
      { name: "vegetable oil", amount: 1, unit: "teaspoon" },
      { name: "pork tenderloin", amount: 2, unit: "" },
      { name: "barbeque sauce", amount: 1, unit: "cup" },
      { name: "light brown sugar", amount: 0.25, unit: "cup" },
      { name: "yellow mustard", amount: 1, unit: "tablespoon" },
      { name: "worcestershire sauce", amount: 1, unit: "tablespoon" },
    ],
    instructions: "Pour the vegetable oil",
    author: "Keith Miller",
    prepTime: "15 minutes",
    cookTime: "5 hours",
    servings: 8,
    description:
      "Authentic, simple, and delicious. This is the best pasta sauce you can make.",
  },
];

const tempIngredients: QuantifiedIngredient[] = [
  { name: "apple cider vinegar", amount: 0.5, unit: "cup" },
  { name: "chicken broth", amount: 0.5, unit: "cup" },
  { name: "vegetable oil", amount: 1, unit: "teaspoon" },
  { name: "pork tenderloin", amount: 2, unit: "" },
  { name: "barbeque sauce", amount: 1, unit: "cup" },
  { name: "light brown sugar", amount: 0.25, unit: "cup" },
  { name: "yellow mustard", amount: 1, unit: "tablespoon" },
  { name: "worcestershire sauce", amount: 1, unit: "tablespoon" },
];
