/** Components */
import { Topbar, Footer } from "./components";

/** Components */
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Spacer } from "lib/components/Atomics";
import theme from "lib/theme";

interface IDefaultLayoutProps {
  children: React.ReactNode;
  topbarItems?: React.ReactNode[];
  divider?: boolean;
}
const Default = ({
  children,
  topbarItems,
  divider = true,
}: IDefaultLayoutProps) => {
  const renderContent = () => {
    return (
      <div
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
        }}
      >
        <Box
          height="max-content"
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
    );
  };

  return (
    <div
      style={{
        height: "inherit",
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
      {renderContent()}
    </div>
  );
};

export default Default;
