import { AuthCtx, TAuthCtx } from "lib/contexts/auth";
import { useHookCtx } from ".";

const useProfile = (): TAuthCtx => {
  return useHookCtx<TAuthCtx>(AuthCtx);
};

export default useProfile;
