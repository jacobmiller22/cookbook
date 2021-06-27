import Link from "next/link";
import { getRecipes } from "apis";
import { RecipeParams } from "interfaces/recipes";

import { Button, Typography, Grid, TextField, Box } from "@material-ui/core";
import { makeStyles, mergeClasses } from "@material-ui/styles";

import { CriteriaForm } from "components/organisms";

const IndexView = () => {
  const classes = useStyles();

  const onSubmit = async (data: RecipeParams) => {
    const recipes = await getRecipes({ ...data });
    console.log(recipes);
  };

  return (
    <div className={classes.root}>
      {/* Index View */}
      <br />
      <Box className={classes.formContainer}>
        <CriteriaForm onSubmit={onSubmit} />
      </Box>
    </div>
  );
};

export default IndexView;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    // flexDirection: "column",
    justifyContent: "center",
  },
  formContainer: {
    display: "flex",
    maxWidth: "65vw",
    width: "100%",
    justifyContent: "center",
    margin: "25px",
  },
}));
