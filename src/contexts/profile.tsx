import { createContext, useEffect, useReducer, useState } from "react";
import { MODAL_VARIANT } from "interfaces";
import { profileReducer } from "reducers";
import { Profile } from "interfaces/Member";
import { getMemberByUsername } from "lib/member";
import { useRouter } from "next/router";

export type TProfileCtx = Profile;

export const ProfileCtx = createContext<TProfileCtx>(null);

const initialState = null;

const ProfileProvider = ({ children }) => {
  const [test, dispatch] = useReducer(profileReducer, initialState);
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);
  useEffect(() => {
    if (!router.isReady) return;

    const fetchProfile = async () => {
      if (!router.isReady) return;

      const username: string | undefined = router.query.username as string;

      if (!username) return;

      const member = await getMemberByUsername(username);
      setProfile(member);
    };

    fetchProfile();
  }, [router.isReady]);

  return (
    // @ts-ignore
    <ProfileCtx.Provider value={[profile]}>{children}</ProfileCtx.Provider>
  );
};
export default ProfileProvider;
