import type { AppProps } from "next/app";
import { ModalProvider } from "contexts";
import { Modal, NotificationController } from "components/Atomics";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "theme";
import NotificationsProvider from "contexts/notifications";
import { SnackbarProvider } from "notistack";

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
      </ThemeProvider>
    </Box>
  );
}
export default MyApp;
