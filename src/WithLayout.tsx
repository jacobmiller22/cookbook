import { useState, useEffect, FC } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import getTheme from "theme";
// import AOS from "aos";

interface Props {
  component: FC;
  layout: FC;
  rest?: any;
}

const WithLayout: FC<Props> = ({
  component: Component,
  layout: Layout,
  ...rest
}: Props) => {
  const [mountedComponent, setMountedComponent] = useState(false);

  useEffect(() => {
    setMountedComponent(true);
    // AOS.refresh();
  }, []);
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    // AOS.init({
    //   once: true,
    //   delay: 50,
    //   duration: 500,
    //   easing: "ease-in-out",
    // });
  }, []);

  if (!mountedComponent) return <div />;

  const themeMode = "light";
  const { title } = rest;
  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline />
      <Paper elevation={0}>
        <Layout themeMode={themeMode} title={title}>
          <Component themeMode={themeMode} {...rest} />
        </Layout>
      </Paper>
    </ThemeProvider>
  );
};

export default WithLayout;
