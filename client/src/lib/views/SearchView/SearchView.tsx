import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { newRecipeRoute } from "lib/routes/client";
/** Interfaces/types */

/** components */
import { Box, Button, Divider, Tooltip, Typography } from "@mui/material";
import { Banner, Spacer, SearchBar } from "lib/components/Atomics";
import { RecipeList, IngredientPanel } from "lib/components/Recipe";
import theme from "lib/theme";
import AddIcon from "@mui/icons-material/Add";
import useRecipes from "lib/hooks/useRecipes";

type SearchViewProps = {
  bannerContent?: React.ReactNode;
};

const SearchView = ({ bannerContent }: SearchViewProps) => {
  const router = useRouter();

  const { recipes, isLoading, ingredients, setIngredients } = useRecipes();

  const handleAddRecipe = () => router.push(newRecipeRoute.path);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100%"
      width="100%"
      marginTop="1rem"
    >
      <Box sx={{ maxWidth: theme.layout.contentWidth }} width="100%">
        <Box display="flex">
          <SearchBar
            marginRight="1rem"
            sx={{ background: theme.palette.background.paper }}
            textFieldProps={{
              placeholder: "Search all recipes...",
              fullWidth: true,
            }}
          />
          <Tooltip title="New recipe">
            <Button
              variant="outlined"
              color="primary"
              startIcon={<AddIcon />}
              onClick={handleAddRecipe}
            >
              New
            </Button>
          </Tooltip>
        </Box>
        <Box>
          <IngredientPanel
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        </Box>
        <Box display="flex" flexDirection="column" height="100%">
          <RecipeList recipes={recipes} isLoading={isLoading} />
          <Box display="flex" justifyContent="flex-end" width="100%">
            <Typography variant="body2">
              Showing {recipes.length || 0} recipe{recipes.length > 1 && "s"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchView;

// const trecipes: Recipe[] = [
//   {
//     id: 1,
//     name: "Pulled Pork BBQ",
//     ingredients: [
//       { name: "apple cider vinegar", amount: 0.5, unit: "cup" },
//       { name: "chicken broth", amount: 0.5, unit: "cup" },
//       { name: "vegetable oil", amount: 1, unit: "teaspoon" },
//       { name: "pork tenderloin", amount: 2, unit: "" },
//       { name: "barbeque sauce", amount: 1, unit: "cup" },
//       { name: "light brown sugar", amount: 0.25, unit: "cup" },
//       { name: "yellow mustard", amount: 1, unit: "tablespoon" },
//       { name: "worcestershire sauce", amount: 1, unit: "tablespoon" },
//     ],
//     instructions: "Pour the vegetable oil",
//     author: "Jacob Miller",
//     prepTime: "15 minutes",
//     cookTime: "5 hours",
//     servings: 8,
//     description:
//       "Texas-style pulled pork simmers in a tangy chili-seasoned barbeque sauce with plenty of onion, then pulled into tender shreds to serve on a buttered, toasted bun.",
//   },
//   {
//     id: 2,
//     name: "Pasta Sauce",
//     ingredients: [
//       { name: "apple cider vinegar", amount: 0.5, unit: "cup" },
//       { name: "chicken broth", amount: 0.5, unit: "cup" },
//       { name: "vegetable oil", amount: 1, unit: "teaspoon" },
//       { name: "pork tenderloin", amount: 2, unit: "" },
//       { name: "barbeque sauce", amount: 1, unit: "cup" },
//       { name: "light brown sugar", amount: 0.25, unit: "cup" },
//       { name: "yellow mustard", amount: 1, unit: "tablespoon" },
//       { name: "worcestershire sauce", amount: 1, unit: "tablespoon" },
//     ],
//     instructions: "Pour the vegetable oil",
//     author: "Keith Miller",
//     prepTime: "15 minutes",
//     cookTime: "5 hours",
//     servings: 8,
//     description:
//       "Authentic, simple, and delicious. This is the best pasta sauce you can make.",
//   },
// ];

// const tempIngredients: QuantifiedIngredient[] = [
//   { name: "apple cider vinegar", amount: 0.5, unit: "cup" },
//   { name: "chicken broth", amount: 0.5, unit: "cup" },
//   { name: "vegetable oil", amount: 1, unit: "teaspoon" },
//   { name: "pork tenderloin", amount: 2, unit: "" },
//   { name: "barbeque sauce", amount: 1, unit: "cup" },
//   { name: "light brown sugar", amount: 0.25, unit: "cup" },
//   { name: "yellow mustard", amount: 1, unit: "tablespoon" },
//   { name: "worcestershire sauce", amount: 1, unit: "tablespoon" },
// ];
