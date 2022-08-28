import { useState, useCallback, Dispatch, SetStateAction } from "react";

/** Interfaces/types */

/** components */
import { QuantifiedIngredient } from "lib/recipe/types";
import {
  Alert,
  Box,
  FormControlLabel,
  Paper,
  Switch,
  Table,
  TableContainer,
} from "@mui/material";
import { Body, Head, TableToolbar } from "./components";

interface IIngredientPanelProps {
  ingredients: QuantifiedIngredient[];
  setIngredients: Dispatch<SetStateAction<QuantifiedIngredient[]>>;
}

const IngredientPanel = ({
  ingredients = [],
  setIngredients,
}: IIngredientPanelProps) => {
  const [show, setShow] = useState(true);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = useState([]);
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = ingredients.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2, mt: 2 }} variant="outlined">
        <TableToolbar
          numSelected={selected.length}
          addIngredient={(ingredient) =>
            setIngredients([...selected, ingredient])
          }
          removeSelected={() => {
            setIngredients(
              ingredients.filter(
                (ingredient) => !selected.includes(ingredient.name)
              )
            );
            setSelected([]);
          }}
          show={[show, setShow]}
        />
        {show && (
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size="medium"
            >
              <Head
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={ingredients.length}
                cells={columns}
              />

              <Body
                rows={ingredients}
                order={order}
                orderBy={orderBy}
                selected={selected}
                setSelected={setSelected}
              />
            </Table>
          </TableContainer>
        )}
        {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Paper>
    </Box>
  );
};

export default IngredientPanel;

const columns = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Ingredient",
  },
  {
    id: "amount",
    numeric: false,
    disablePadding: false,
    label: "Amount",
    type: "number",
  },
  {
    id: "unit",
    numeric: false,
    disablePadding: false,
    label: "Unit",
  },
];
