import { createTheme, Palette, responsiveFontSizes } from "@mui/material";
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

export type Theme = {
  palette: Palette;
  layout: {
    contentWidth: string;
  };
  typography: {
    fontFamily: string;
  };
  zIndex: {
    appBar: number;
    drawer: number;
  };
};

//@ts-ignore
const theme: Theme = createTheme({
  palette: light,
  //@ts-ignore
  layout: {
    contentWidth: "1000px",
  },
  typography: {
    fontFamily: "Lato",
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});

export default theme;
