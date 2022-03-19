import useSWR from "swr";
import { useState, useEffect } from "react";
import axios from "axios";
/** Interfaces/types */

import { Button, Divider, Grid, Typography } from "@mui/material";
import { QuantifiedIngredient, Recipe } from "interfaces/Recipe";
import { RecipeList } from "./components";
import IngredientPanel from "./components/IngredientPanel";
import { getRecipes } from "lib/recipes";

/** components */

interface ISearchViewProps {}

const SearchView = ({}: ISearchViewProps) => {
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

  return (
    <Grid container spacing={3} sx={{ margin: "auto" }} justifyContent="center">
      <Grid
        item
        xs={12}
        container
        sx={{
          padding: "5rem 0",
          marginBottom: "-4rem",
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
      >
        <Grid item xs={12} container justifyContent="flex-start">
          <Button variant="contained" color="info">
            Add Recipe
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Divider variant="middle" />
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        container
        flexDirection="row"
        justifyContent="center"
        sx={{ maxWidth: "1000px !important" }}
      >
        <Grid item xs={12}>
          <IngredientPanel
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        </Grid>
        <Grid item xs={12}>
          <RecipeList recipes={recipes} isLoading={isLoading} />
        </Grid>
      </Grid>
    </Grid>
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
