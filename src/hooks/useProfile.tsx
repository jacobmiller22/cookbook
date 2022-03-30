import { ProfileCtx } from "contexts/profile";
import { Profile } from "interfaces/Member";
import { DispatchWithoutAction } from "react";
import { useHookCtx } from ".";

const useProfile = (): Profile => {
  const [profile] = useHookCtx(ProfileCtx);
  return profile;
};

export default useProfile;
