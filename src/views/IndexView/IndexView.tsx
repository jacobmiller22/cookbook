import Link from "next/link";
import { getRecipes } from "lib/recipes";
import { RecipeParams } from "interfaces/Recipe";

import { Button, Typography, Grid, TextField, Box } from "@mui/material";

import { CriteriaForm } from "components/Atomics";

const IndexView = () => {
  const onSubmit = async (data: RecipeParams) => {
    const recipes = await getRecipes({ ...data });
  };

  return (
    <div>
      {/* Index View */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4"></Typography>
        </Grid>
      </Grid>
      <br />
      <Box>
        <CriteriaForm onSubmit={onSubmit} />
      </Box>
    </div>
  );
};

export default IndexView;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     width: "100vw",
//     height: "100vh",
//     // flexDirection: "column",
//     justifyContent: "center",
//   },
//   formContainer: {
//     display: "flex",
//     maxWidth: "65vw",
//     width: "100%",
//     justifyContent: "center",
//     margin: "25px",
//   },
// }));
