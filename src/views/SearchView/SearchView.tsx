import useSWR from "swr";
/** Interfaces/types */

import { Divider, Grid, Typography } from "@mui/material";
import { CriteriaForm } from "components/Atomics";
import { Recipe } from "interfaces/Recipe";
import { RecipeList } from "./components";

/** components */

interface ISearchViewProps {}

const SearchView = ({}: ISearchViewProps) => {
  const onSubmit = (vals) => console.log(vals);

  return (
    <Grid container spacing={3} sx={{ margin: "auto" }}>
      <Grid item xs={12} container justifyContent="center">
        <Typography variant="h4">Search your Recipes</Typography>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Typography variant="body1">
          Enter ingredients, search for recipes that include your ingredients.
        </Typography>
      </Grid>

      <Grid item xs={12} container flexDirection="row">
        <Grid item xs={12} md={5}>
          <CriteriaForm onSubmit={onSubmit} />
        </Grid>
        <Grid item xs={12} md={7}>
          <RecipeList recipes={recipes} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchView;

const recipes: Recipe[] = [
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
