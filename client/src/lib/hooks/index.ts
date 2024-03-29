import { Context, DispatchWithoutAction, useContext } from "react";

export const useHookCtx = <T>(ctx: Context<T>): T => {
  const stateDispatch = useContext(ctx);

  if (!stateDispatch) {
    throw "useHookCtx must be used within its provider";
  }

  return stateDispatch;
};

export { default as useAuth } from "./useAuth";
export { default as useProfile } from "./useProfile";
export { default as useModal } from "./useModal";
export { default as useForceUpdate } from "./useForceUpdate";
export { default as useHasMounted } from "./useHasMounted";
