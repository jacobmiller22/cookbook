import type { NextPage } from "next";
import { Base } from "layouts";
import { UserProfile } from "views";

/** Components */
import TopbarGroup from "components/Atomics/TopbarGroup";
import { DEFAULT_TOPBAR_ITEMS } from "consts";

const UserProfilePage: NextPage = () => (
  //@ts-ignore
  <Base
    topbarItems={TopbarGroup({ items: DEFAULT_TOPBAR_ITEMS })}
    divider={false}
  >
    <UserProfile />
  </Base>
);

export default UserProfilePage;
