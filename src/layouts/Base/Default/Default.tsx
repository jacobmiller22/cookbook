/** Components */
import { Topbar, Footer } from "./components";
/** Theme */

import { ThemeProvider, Paper, Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

/** Components */
import Divider from "@mui/material/Divider";
import { Spacer } from "components/Atomics";
import theme from "theme";

interface IDefaultLayoutProps {
  children: React.ReactNode;
  topbarItems?: React.ReactNode[];
  style: {};
  divider?: boolean;
}
const Default = ({
  children,
  topbarItems,
  style,
  divider = true,
}: IDefaultLayoutProps) => {
  return (
    <div
      style={{
        height: "max-content",
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Topbar items={topbarItems} />
      </div>

      {divider && <Divider variant="fullWidth" />}
      <div
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
        }}
      >
        <Box
          height="100%"
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          {children}
        </Box>
        <Spacer />
        <Footer />
      </div>
    </div>
  );
};

export default Default;
