import { ProfileCtx, TProfileCtx } from "lib/contexts/profile";
import { useHookCtx } from ".";

const useProfile = (): TProfileCtx => {
  const [profile] = useHookCtx<TProfileCtx>(ProfileCtx);
  return profile;
};

export default useProfile;
