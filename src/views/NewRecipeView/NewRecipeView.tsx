/** Interfaces/types */

/** components */
import { Box, Divider, Typography } from "@mui/material";
import { BackButton, BasicForm } from "components/Atomics";
import fields from "./fields";
import fieldsSchema from "./schema";

interface INewRecipeViewProps {}

const NewRecipeView = ({}: INewRecipeViewProps) => {
  const handleSubmit = async (values: any) => {
    console.log(values);
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
