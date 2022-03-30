import _ from "lodash";
/** Interfaces/types */

import { Recipe } from "interfaces/Recipe";
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
import { replaceWildcards } from "routes";
import { memberRecipeRoute } from "routes/client";

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

    return _.map(recipes, (recipe: Recipe, i: number) => {
      console.log(recipe);
      return (
        <Link
          key={`recipe-list-item-${i}`}
          href={replaceWildcards(memberRecipeRoute, [
            recipe.authorId,
            `${recipe.id}`,
          ])}
          prefetch={i < 5}
        >
          <ListItem sx={{ padding: 0, mb: "0.5rem" }}>
            <RecipeItem recipe={recipe} />
          </ListItem>
        </Link>
      );
    });
  };

  return <List sx={{ padding: 0 }}>{renderRecipes()}</List>;
};

export default RecipeList;

const RecipeItem = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardActionArea component="div">
        <CardContent>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {recipe.author}
          </Typography>
          <Typography variant="h6">{recipe.name}</Typography>
          <Box sx={{ mb: 2 }}>
            <Chip
              variant="outlined"
              color="secondary"
              label={<strong>{`Serves ${recipe.servings}`}</strong>}
              sx={{ mr: "0.5rem" }}
            />
            <Chip
              variant="outlined"
              color="secondary"
              label={
                <strong>{`${formatSeconds(parseInt(recipe.prepTime), {
                  compact: true,
                })} Prep`}</strong>
              }
              sx={{ mr: "0.5rem" }}
            />
            <Chip
              variant="outlined"
              color="secondary"
              label={
                <strong>{`Cooks in ${formatSeconds(parseInt(recipe.cookTime), {
                  compact: true,
                })}`}</strong>
              }
              sx={{ mr: "0.5rem" }}
            />
          </Box>
          <Box>
            <Typography variant="body1">{recipe.description}</Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Print</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

const SkeletonRecipeItem = () => {
  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardContent>
        <Skeleton variant="text" sx={{}} width={120} height={25} />
        <Skeleton variant="text" sx={{}} width={280} height={32} />
        <Box sx={{ mb: 2 }} display="flex">
          <Skeleton
            variant="rectangular"
            sx={{ mr: "0.5rem", borderRadius: "16px" }}
            width={72.5}
            height={32}
          />
          <Skeleton
            variant="rectangular"
            sx={{ mr: "0.5rem", borderRadius: "16px" }}
            width={72.5}
            height={32}
          />
          <Skeleton
            variant="rectangular"
            sx={{ mr: "0.5rem", borderRadius: "16px" }}
            width={72.5}
            height={32}
          />
        </Box>
        <Box>
          <Skeleton variant="text" sx={{ width: "92%" }} />
          <Skeleton variant="text" sx={{ width: "96%" }} />
          <Skeleton variant="text" sx={{ width: "67%" }} />
        </Box>
      </CardContent>
      <CardActions>
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: "4px", ml: 1 }}
          width={68}
          height={36}
        />
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: "4px", ml: 1 }}
          width={68}
          height={36}
        />
        {/* <Skeleton variant="rectangular" sx={{}} /> */}
      </CardActions>
    </Card>
  );
};
