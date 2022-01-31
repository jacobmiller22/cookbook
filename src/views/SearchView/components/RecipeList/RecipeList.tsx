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
} from "@mui/material";

interface IRecipeListProps {
  recipes: Recipe[];
}

const RecipeList = ({ recipes = [] }: IRecipeListProps) => {
  const renderRecipes = () => {
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
    // <Box
    //   sx={{
    //     border: "1px solid",
    //     borderRadius: "4px",
    //     padding: "1rem",
    //   }}
    // >
    //   <Typography variant="body2">{recipe.author}</Typography>
    //   <Typography variant="h6">{recipe.name}</Typography>

    // <Box>
    //   <Chip label={`Serves ${recipe.servings}`}></Chip>
    //   <Chip label={`${recipe.prepTime} Prep`}></Chip>
    //   <Chip label={`Cooks in ${recipe.cookTime}`}></Chip>
    // </Box>
    // <Box>
    //   <Typography variant="body1">{recipe.description}</Typography>
    // </Box>
    // </Box>
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {recipe.author}
          </Typography>
          <Typography variant="h6">{recipe.name}</Typography>
          <Box sx={{ mb: 2 }}>
            <Chip label={`Serves ${recipe.servings}`}></Chip>
            <Chip label={`${recipe.prepTime} Prep`}></Chip>
            <Chip label={`Cooks in ${recipe.cookTime}`}></Chip>
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
