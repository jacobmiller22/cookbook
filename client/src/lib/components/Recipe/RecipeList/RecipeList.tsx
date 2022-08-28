import _ from "lodash";
/** Interfaces/types */

import { Recipe } from "lib/recipe/types";
/** components */
import Link from "next/link";
import {
  ListItem,
  List,
  Typography,
  Box,
  Divider,
  Chip,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  CardActionArea,
  Skeleton,
} from "@mui/material";
import { formatSeconds } from "lib/time";
import { replaceWildcards } from "lib/routes";
import { memberRecipeRoute } from "lib/routes/client";
import { RecipeCard } from "..";
import SkeletonRecipeItem from "../RecipeCard/Skeleton";

interface IRecipeListProps {
  recipes: Recipe[];
  isLoading: boolean;
}

const RecipeList = ({ recipes = [], isLoading }: IRecipeListProps) => {
  const renderRecipes = () => {
    if (isLoading) {
      return _.times(3, (i: number) => (
        <ListItem
          key={`recipe-skeleton-item-${i}`}
          sx={{ padding: 0, mb: "0.5rem" }}
        >
          <SkeletonRecipeItem />
        </ListItem>
      ));
    }

    return _.map(recipes, (recipe: Recipe, i: number) => (
      <Link
        key={`recipe-list-item-${i}`}
        href={replaceWildcards(memberRecipeRoute, [
          recipe.authorId,
          `${recipe.id}`,
        ])}
      >
        <ListItem sx={{ padding: 0, mb: "0.5rem" }}>
          <RecipeCard recipe={recipe} />
        </ListItem>
      </Link>
    ));
  };

  return <List sx={{ padding: 0 }}>{renderRecipes()}</List>;
};

export default RecipeList;
