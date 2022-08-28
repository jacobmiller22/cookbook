import theme from "lib/theme";
/** Components */
import { Box } from "@mui/material";

type BannerProps = {
  children?: React.ReactNode | React.ReactNodeArray;
  [rest: string]: any;
};

const Banner = ({ children, ...rest }: BannerProps) => {
  return (
    <Box
      display="flex"
      paddingY="1rem"
      width="100%"
      sx={{ backgroundColor: theme.palette.secondary.main }}
      justifyContent="center"
      {...rest}
    >
      {children}
    </Box>
  );
};
export default Banner;
