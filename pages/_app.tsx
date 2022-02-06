import type { AppProps } from "next/app";
import { ModalProvider } from "contexts";
import { Modal } from "components/Atomics";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Modal />
      <Component {...pageProps} />;
    </ModalProvider>
  );
}
export default MyApp;
