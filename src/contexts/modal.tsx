import { createContext, useContext, useReducer } from "react";
import { MODAL_VARIANT } from "interfaces";
import { modalReducer } from "reducers";

const INIT_CTX: IModalCtx = {
  type: null,
  open: false,
};

interface IModalCtx {
  type: MODAL_VARIANT;
  open: boolean;
}

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

// export const useModal = () => {
//   // @ts-ignore
//   const ctx: [IModalCtx, any] = useContext(ModalCtx);

//   if (!ctx) {
//     throw "useModal must be used within a ModalProvider";
//   }

//   return ctx;
// };
