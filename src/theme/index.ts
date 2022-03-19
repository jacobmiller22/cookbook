import { createTheme, responsiveFontSizes } from "@mui/material";
import { light } from "./palette"; // Can look into dark mode later

const getTheme = () =>
  responsiveFontSizes(
    createTheme({
      palette: light,
      // layout: {
      //   contentWidth: 1236,
      // },
      typography: {
        fontFamily: "Lato",
      },
      zIndex: {
        appBar: 1200,
        drawer: 1100,
      },
    })
  );

const theme = createTheme({
  palette: light,
  // layout: {
  //   contentWidth: 1236,
  // },
  typography: {
    fontFamily: "Lato",
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});

export default theme;
