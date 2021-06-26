import {
  createMuiTheme,
  PaletteType,
  responsiveFontSizes,
} from "@material-ui/core";
import { light } from "./palette"; // Can look into dark mode later

const getTheme = (mode) =>
  responsiveFontSizes(
    createMuiTheme({
      palette: light,
      layout: {
        contentWidth: 1236,
      },
      typography: {
        fontFamily: "Lato",
      },
      zIndex: {
        appBar: 1200,
        drawer: 1100,
      },
    })
  );

export default getTheme;
