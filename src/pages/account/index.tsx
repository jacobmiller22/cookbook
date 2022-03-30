import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { InternalProfileView, UserProfile } from "views";
import { getMemberByUsername } from "lib/member";
import { useAuth } from "hooks";
import { Base } from "layouts";
import { TopbarGroup } from "components/Atomics";
import { DEFAULT_TOPBAR_ITEMS } from "consts";
import { useSnackbar } from "notistack";

const ProfilePage: NextPage = () => {
  const { user } = useAuth();

  return (
    <Base
      topbarItems={TopbarGroup({ items: DEFAULT_TOPBAR_ITEMS })}
      divider={false}
    >
      <UserProfile profile={user}>
        <InternalProfileView />
      </UserProfile>
    </Base>
  );
};

export default ProfilePage;
