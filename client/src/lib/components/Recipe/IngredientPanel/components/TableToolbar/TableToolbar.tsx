/** Interfaces/types */

/** components */
import {
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  Button,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useModal } from "lib/hooks";
import { MODAL_VARIANT } from "lib/modal/types";
import { SingleIngredientForm } from "lib/components/Atomics";

interface ITableToolbarProps {
  numSelected: number;
  addIngredient: (ingredient: any) => void;
  removeSelected: (ingredient: any) => void;
  show: [show: boolean, setShow: (value: boolean) => void];
}

const TableToolbar = ({
  numSelected,
  addIngredient,
  removeSelected,
  show,
}: ITableToolbarProps) => {
  const [modal, dispatch] = useModal();

  const handleAddIconClick = () => {
    dispatch({
      type: MODAL_VARIANT.FORM,
      open: true,
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
            <DeleteIcon onClick={removeSelected} />
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
      <Tooltip title={show[0] ? "Hide filter" : "Show filter"}>
        <Button onClick={() => show[1](!show[0])}>
          {show[0] ? "Hide" : "Filter"}
        </Button>
      </Tooltip>
    </Toolbar>
  );
};

export default TableToolbar;
