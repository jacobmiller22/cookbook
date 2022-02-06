/** Interfaces/types */

/** components */
import {
  IconButton,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useModal } from "contexts/modal";
import { MODAL_VARIANT } from "interfaces";
import { SingleIngredientForm } from "components/Atomics";

interface ITableToolbarProps {
  numSelected: number;
  addIngredient: (ingredient: any) => void;
  removeSelected: (ingredient: any) => void;
}

const TableToolbar = ({
  numSelected,
  addIngredient,
  removeSelected,
}: ITableToolbarProps) => {
  const [modal, dispatch] = useModal();

  console.log(modal);
  const handleAddIconClick = () => {
    dispatch({
      type: MODAL_VARIANT.FORM,
      payload: {
        title: "Add Ingredient",
        body: SingleIngredientForm,
        bodyProps: {
          onComplete: (ingredient: any) => addIngredient(ingredient),
        },
      },
    });
  };

  const renderWithSelected = () => {
    return (
      <>
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
        <Tooltip title="Delete Ingredient">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </>
    );
  };

  const renderWithoutSelected = () => {
    return (
      <>
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Ingredients
        </Typography>
        {/* <FormControl>
          <FormControlLabel label="Search" />
        </FormControl> */}
        {/* <TextField
          label="Search Ingredients..."
          variant="standard"
          size="small"
          autoFocus
          fullWidth
        /> */}
        <Tooltip title="Add Ingredient">
          <IconButton onClick={handleAddIconClick}>
            <AddIcon />
          </IconButton>
        </Tooltip>
      </>
    );
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? renderWithSelected() : renderWithoutSelected()}
    </Toolbar>
  );
};

export default TableToolbar;
