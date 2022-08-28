import { createContext, useReducer } from "react";
import { MODAL_VARIANT } from "lib/modal/types";
import { modalReducer } from "lib/reducers";

const INIT_CTX: TCtxValue = {
  type: null,
  open: false,
};

type TCtxValue = {
  type: MODAL_VARIANT;
  open: boolean;
  payload?: any;
};

export type TModalCtx = [TCtxValue, React.Dispatch<TCtxValue>];

export const ModalCtx = createContext(INIT_CTX);

const initialState = INIT_CTX;

const ModalProvider = ({ children }) => {
  const [modalState, dispatch] = useReducer(modalReducer, initialState);

  return (
    // @ts-ignore
    <ModalCtx.Provider value={[modalState, dispatch]}>
      {children}
    </ModalCtx.Provider>
  );
};
export default ModalProvider;
