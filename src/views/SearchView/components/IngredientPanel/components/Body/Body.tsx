/** Interfaces/types */

import { Checkbox, TableBody, TableCell, TableRow } from "@mui/material";

/** components */

interface IBodyProps {
  rows: any[];
  order: any;
  orderBy: any;
  selected: any;
  setSelected: any;
}

const Body = ({ rows, order, orderBy, selected, setSelected }: IBodyProps) => {
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <TableBody>
      {/* if you don't need to support IE11, you can replace the `stableSort` call with:
   rows.slice().sort(getComparator(order, orderBy)) */}
      {stableSort(rows, getComparator(order, orderBy))
        // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          const isItemSelected = isSelected(row.name);
          const labelId = `enhanced-table-checkbox-${index}`;

          return (
            <TableRow
              hover
              onClick={(event) => handleClick(event, row.name)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.name}
              selected={isItemSelected}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={isItemSelected}
                  inputProps={{
                    "aria-labelledby": labelId,
                  }}
                />
              </TableCell>
              <TableCell component="th" id={labelId} scope="row" padding="none">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.amount}</TableCell>
              <TableCell align="left">{row.unit}</TableCell>
            </TableRow>
          );
        })}
      {rows.length < 8 && (
        <TableRow
          style={{
            height: 53 * (8 - rows.length),
          }}
        >
          <TableCell colSpan={3} />
        </TableRow>
      )}
      <TableRow
        style={{
          height: 53,
        }}
      >
        <TableCell colSpan={3}></TableCell>
      </TableRow>
    </TableBody>
  );
};

export default Body;

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -1 * descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
