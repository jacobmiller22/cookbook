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
  Stack,
} from "@mui/material";
import { formatSeconds } from "lib/time";
import { replaceWildcards } from "lib/routes";
import { memberRecipeRoute } from "lib/routes/client";
import { RecipeCard } from "..";
import SkeletonRecipeItem from "../RecipeCard/Skeleton";
import { SlidingStack } from "lib/components/Atomics";

interface IRecipeListProps {
  recipes: Recipe[];
  isLoading?: boolean;
  variant?: "list" | "horizontal";
  paging?: boolean;
}

const RecipeList = ({
  recipes = [],
  isLoading = false,
  variant = "list",
  paging = false,
}: IRecipeListProps) => {
  const direction = getDir(variant);
  const width = getWidth(variant);

  const renderRecipes = () => {
    if (isLoading) {
      return _.times(15, (i: number) => (
        <ListItem
          key={`recipe-skeleton-item-${i}`}
          sx={{ padding: 0, mb: "0.5rem", width }}
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
        <ListItem sx={{ padding: 0, mb: "0.5rem", width }}>
          <RecipeCard recipe={recipe} />
        </ListItem>
      </Link>
    ));
  };

  if (variant === "horizontal") {
    return <SlidingStack slideSize={3}>{renderRecipes()}</SlidingStack>;
  }

  return (
    <Stack sx={{ padding: 0 }} spacing="0.5rem" overflow={getOverflow(variant)}>
      {renderRecipes()}
    </Stack>
  );
};

export default RecipeList;

const getDir = (variant: "list" | "horizontal") => {
  if (variant === "list") {
    return "column";
  }
  return "row";
};

const getWidth = (variant: "list" | "horizontal") => {
  if (variant === "list") {
    return "100%";
  }
  return "100%";
};

const getOverflow = (variant: "list" | "horizontal") => {
  if (variant === "list") {
    return "visible";
  }
  return "auto";
};
