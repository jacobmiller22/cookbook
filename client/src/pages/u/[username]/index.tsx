import type { NextPage } from "next";
import { Base } from "layouts";
import { UserProfile, ExternalProfileView } from "views";

/** Components */
import TopbarGroup from "components/Atomics/TopbarGroup";
import { DEFAULT_TOPBAR_ITEMS } from "consts";
import { getMemberByUsername } from "lib/member";
import router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ProfileProvider from "contexts/profile";

const UserProfilePage: NextPage = () => {
  return (
    <Base
      topbarItems={TopbarGroup({ items: DEFAULT_TOPBAR_ITEMS })}
      divider={false}
    >
      <ProfileProvider>
        <UserProfile>
          <ExternalProfileView />
        </UserProfile>
      </ProfileProvider>
    </Base>
  );
};

export default UserProfilePage;
