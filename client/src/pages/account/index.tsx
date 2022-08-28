import type { NextPage } from "next";
import { InternalProfileView, UserProfile } from "lib/views";
import { useAuth } from "lib/hooks";
import { Base } from "lib/layouts";
import { TopbarGroup } from "lib/components/Atomics";
import { DEFAULT_TOPBAR_ITEMS } from "consts";
import { AuthGuard } from "lib/components/Auth";
import { Role } from "lib/auth";

const ProfilePage: NextPage = () => {
  const { user } = useAuth();

  return (
    <Base
      topbarItems={TopbarGroup({ items: DEFAULT_TOPBAR_ITEMS })}
      divider={false}
    >
      <AuthGuard roles={[Role.MEMBER]}>
        <UserProfile profile={user}>
          <InternalProfileView />
        </UserProfile>
      </AuthGuard>
    </Base>
  );
};

export default ProfilePage;
