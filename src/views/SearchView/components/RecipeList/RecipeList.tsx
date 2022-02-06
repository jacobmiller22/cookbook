import _ from "lodash";
/** Interfaces/types */

import { Recipe } from "interfaces/Recipe";
/** components */
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

interface IRecipeListProps {
  recipes: Recipe[];
  isLoading: boolean;
}

const RecipeList = ({ recipes = [], isLoading }: IRecipeListProps) => {
  const renderRecipes = () => {
    if (isLoading) {
      return _.times(3, () => (
        <ListItem>
          <SkeletonRecipeItem />
        </ListItem>
      ));
    }

    return _.map(recipes, (recipe: Recipe) => {
      return (
        <ListItem>
          <RecipeItem recipe={recipe} />
        </ListItem>
      );
    });
  };

  return <List>{renderRecipes()}</List>;
};

export default RecipeList;

const RecipeItem = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {recipe.author}
          </Typography>
          <Typography variant="h6">{recipe.name}</Typography>
          <Box sx={{ mb: 2 }}>
            <Chip label={`Serves ${recipe.servings}`} sx={{ mr: "0.5rem" }} />
            <Chip label={`${recipe.prepTime} Prep`} sx={{ mr: "0.5rem" }} />
            <Chip label={`Cooks in ${recipe.cookTime}`} sx={{ mr: "0.5rem" }} />
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
