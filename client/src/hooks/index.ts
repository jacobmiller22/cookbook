import { Context, DispatchWithoutAction, useContext } from "react";

export const useHookCtx = <T>(ctx: Context<T>): any => {
  const stateDispatch = useContext(ctx);

  if (!stateDispatch) {
    throw "useModal must be used within its provider";
  }

  return stateDispatch;
};

export { default as useAuth } from "./useAuth";
export { default as useProfile } from "./useProfile";
export { default as useModal } from "./useModal";
export { default as useForceUpdate } from "./useForceUpdate";
