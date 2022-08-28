import { createContext, useEffect, useReducer, useState } from "react";
import { MODAL_VARIANT } from "lib/modal/types";
import { profileReducer } from "lib/reducers";
import { Profile } from "lib/member/types";
import { getMemberByUsername, getMemberMetaByUsername } from "lib/member";
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

      const meta = await getMemberMetaByUsername(username);

      const joinedAt = new Date(meta.joinedAt);

      console.log({ ...member, ...meta, joinedAt });

      setProfile({ ...member, ...meta, joinedAt });
    };

    fetchProfile();
  }, [router.isReady]);

  return (
    // @ts-ignore
    <ProfileCtx.Provider value={[profile]}>{children}</ProfileCtx.Provider>
  );
};
export default ProfileProvider;
