import { AuthCtx, TAuthCtx } from "contexts/auth";
import { Profile } from "interfaces/Member";
import { DispatchWithoutAction } from "react";
import { useHookCtx } from ".";

const useProfile = (): TAuthCtx => {
  return useHookCtx(AuthCtx);
};

export default useProfile;
