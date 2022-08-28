import type { AppProps } from "next/app";
import { ModalProvider } from "contexts";
import { Modal } from "components/Atomics";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "theme";

import { SnackbarProvider } from "notistack";
import AuthProvider from "contexts/auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Box display="flex" flexDirection="column">
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
        <AuthProvider>
          <SnackbarProvider maxSnack={3}>
            <CssBaseline />
            <ModalProvider>
              <Modal />
              {/* <NotificationsProvider> */}
              <Component {...pageProps} />
              {/* <NotificationController /> */}
              {/* </NotificationsProvider> */}
            </ModalProvider>
          </SnackbarProvider>
        </AuthProvider>
      </ThemeProvider>
    </Box>
  );
}
export default MyApp;
