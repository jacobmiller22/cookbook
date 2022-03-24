import type { NextPage } from "next";
import { Base } from "layouts";
import { SearchView } from "views";

/** Components */
import TopbarGroup from "components/Atomics/TopbarGroup";
import { DEFAULT_TOPBAR_ITEMS } from "consts";

const UserRecipesPage: NextPage = () => (
  //@ts-ignore
  <Base
    topbarItems={TopbarGroup({ items: DEFAULT_TOPBAR_ITEMS })}
    divider={false}
  >
    {/* <SearchView /> */}
    <div>test</div>
  </Base>
);

export default UserRecipesPage;
