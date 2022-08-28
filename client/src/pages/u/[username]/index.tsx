import type { NextPage } from "next";
import { Base } from "lib/layouts";
import { UserProfile, ExternalProfileView } from "lib/views";

/** Components */
import TopbarGroup from "lib/components/Atomics/TopbarGroup";
import { DEFAULT_TOPBAR_ITEMS } from "consts";
import ProfileProvider from "lib/contexts/profile";

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
