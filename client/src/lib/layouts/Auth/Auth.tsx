import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface IAuthProps {
  children: React.ReactNode;
}

const Auth = ({ children }: IAuthProps) => {
  const theme = useTheme();
  //@ts-ignore
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div
    // className={clsx({
    //   [classes.root]: true,
    // })}
    >
      {/* <Topbar
        onSidebarOpen={handleSidebarOpen}
        themeMode={themeMode}
        themeToggler={themeToggler}
      /> */}
      {/* <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
      /> */}
      <main>
        {/* <Divider /> */}
        {children}
      </main>
      {/* <Footer pages={pages} /> */}
    </div>
  );
};

export default Auth;
