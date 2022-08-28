import type { NextPage } from "next";
import { Base } from "lib/layouts";
import { UserProfile, ExternalProfileView } from "lib/views";

/** Components */
import TopbarGroup from "lib/components/Atomics/TopbarGroup";

import ProfileProvider from "lib/contexts/profile";

const UserProfilePage: NextPage = () => {
  return (
    <Base divider={false}>
      <ProfileProvider>
        <UserProfile>
          <ExternalProfileView />
        </UserProfile>
      </ProfileProvider>
    </Base>
  );
};

export default UserProfilePage;
