/** Components  */
import { TextField } from "@mui/material";

const SearchBar = ({ marginRight, ...rest }) => {
  return (
    <TextField
      variant="outlined"
      size="small"
      placeholder="Search..."
      inputProps={{ sx: { lineHeight: "1.25px", height: "inherit" } }}
      sx={{ marginRight }}
      {...rest}
    />
  );
};

export default SearchBar;
