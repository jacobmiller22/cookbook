/** Components */
import { Topbar, Footer } from "./components";
/** Theme */

import { ThemeProvider, Paper } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

/** Components */
import Divider from "@mui/material/Divider";

interface IDefaultLayoutProps {
  children: React.ReactNode;
  topbarItems?: React.ReactNode[];
  style: {};
}
const Default = ({ children, topbarItems, style }: IDefaultLayoutProps) => {
  return (
    <div style={{ height: "100%" }}>
      <Topbar
        items={topbarItems}
        // onSidebarOpen={handleSidebarOpen}
        // themeMode={themeMode}
        // themeToggler={themeToggler}
      />
      {/* <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
      /> */}
      <Divider variant="middle" />
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "0px",
          ...style,
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Default;
