import { useEffect } from "react";
import { useRouter } from "next/router";
/** Interfaces/types */

/** components */
import { Box, Divider, Typography } from "@mui/material";
import { BackButton, BasicForm } from "components/Atomics";
import fields from "./fields";
import fieldsSchema from "./schema";
import { myRecipesRoute } from "routes/client";
import { replaceWildcards } from "routes";
import { useAuth } from "hooks";

interface INewRecipeViewProps {}

const NewRecipeView = ({}: INewRecipeViewProps) => {
  const router = useRouter();
  const { user } = useAuth();

  // We will want to direct the user to their recipes page upon submission
  // To more smoothly transition between pages, we prefetch the my recipes page
  const url = replaceWildcards(myRecipesRoute, [user.username]);
  router.prefetch(url);

  const handleSubmit = async (values: any) => {
    console.log(values);
    router.push(url);
    return true;
  };

  return (
    <>
      <Box maxWidth="800px" width="100%" marginY="2rem">
        <BackButton variant="text" />
        <Typography variant="h6" gutterBottom marginTop="1rem">
          New Recipe
        </Typography>
        <Divider sx={{ marginBottom: "1rem" }} />
        <BasicForm
          fields={fields}
          handleSubmit={handleSubmit}
          schema={fieldsSchema}
        />
      </Box>
    </>
  );
};

export default NewRecipeView;
