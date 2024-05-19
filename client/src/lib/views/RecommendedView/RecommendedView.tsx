import { Typography, Box } from "@mui/material";
import { RecipeList } from "lib/components/Recipe";
import theme from "lib/theme";

const RecommendedView = () => {
  return (
    <Box width="100%" height="100%">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="100%"
        width="100%"
      >
        <Box
          sx={{ maxWidth: theme.layout.contentWidth }}
          width="100%"
          maxWidth="100%"
          minWidth={"0%"}
        >
          <Typography variant="h5">Suggested recipes</Typography>
          <RecipeList recipes={[]} isLoading={true} variant="horizontal" />
        </Box>
      </Box>
    </Box>
  );
};

export default RecommendedView;
