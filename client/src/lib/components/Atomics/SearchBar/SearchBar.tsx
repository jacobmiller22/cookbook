/** Components  */
import { SxProps, TextField, TextFieldProps } from "@mui/material";

type SearchBarProps = {
  marginRight?: string;
  textFieldProps?: TextFieldProps;
  sx?: SxProps;
};

const SearchBar = ({ marginRight, textFieldProps, sx }: SearchBarProps) => {
  return (
    <TextField
      variant="outlined"
      size="small"
      placeholder="Search..."
      inputProps={{ sx: { lineHeight: "1.25px", height: "inherit" } }}
      sx={{ marginRight, ...sx }}
      {...textFieldProps}
    />
  );
};

export default SearchBar;
