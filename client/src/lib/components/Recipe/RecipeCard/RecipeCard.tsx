import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Chip,
  CardActions,
  Button,
} from "@mui/material";
import { Recipe } from "lib/recipe/types";
import { formatSeconds } from "lib/time";
import { RecipeChip } from "./components";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardActionArea component="div">
        <CardContent>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {recipe.author}
          </Typography>
          <Typography variant="h6">{recipe.name}</Typography>
          <Box sx={{ mb: 2 }}>
            <RecipeChip
              label={<strong>{`Serves ${recipe.servings}`}</strong>}
            />
            <RecipeChip
              label={
                <strong>{`${formatSeconds(parseInt(recipe.prepTime), {
                  compact: true,
                })} Prep`}</strong>
              }
            />
            <RecipeChip
              label={
                <strong>{`Cooks in ${formatSeconds(parseInt(recipe.cookTime), {
                  compact: true,
                })}`}</strong>
              }
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

export default RecipeCard;
