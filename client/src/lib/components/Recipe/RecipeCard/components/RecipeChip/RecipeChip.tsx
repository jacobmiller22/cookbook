import { Chip } from "@mui/material";

type RecipeChipProps = {
  label: string | JSX.Element;
};

const RecipeChip = ({ label }: RecipeChipProps) => {
  return (
    <Chip
      variant="outlined"
      color="secondary"
      label={label}
      size="small"
      sx={{ mr: "0.5rem" }}
    />
  );
};

export default RecipeChip;
