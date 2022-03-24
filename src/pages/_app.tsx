import type { AppProps } from "next/app";
import { ModalProvider } from "contexts";
import { Modal } from "components/Atomics";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
      <CssBaseline />
      <ModalProvider>
        <Modal />
        <Component {...pageProps} />
      </ModalProvider>
    </ThemeProvider>
  );
}
export default MyApp;
