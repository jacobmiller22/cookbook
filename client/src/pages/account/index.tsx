import type { NextPage } from "next";
import { InternalProfileView, UserProfile } from "lib/views";
import { useAuth } from "lib/hooks";
import { Base } from "lib/layouts";
import { TopbarGroup } from "lib/components/Atomics";

import { AuthGuard } from "lib/components/Auth";
import { Role } from "lib/auth";

const ProfilePage: NextPage = () => {
  const { user } = useAuth();

  return (
    <Base divider={false}>
      <AuthGuard roles={[Role.MEMBER]}>
        <UserProfile profile={user}>
          <InternalProfileView />
        </UserProfile>
      </AuthGuard>
    </Base>
  );
};

export default ProfilePage;
