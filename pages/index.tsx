import type { NextPage } from "next";
import { Base } from "layouts";
import { SearchView } from "views";

/** Components */
import TopbarGroup from "components/Atomics/TopbarGroup";
import { DEFAULT_TOPBAR_ITEMS } from "consts";

const IndexPage: NextPage = () => (
  //@ts-ignore
  <Base topbarItems={TopbarGroup({ items: DEFAULT_TOPBAR_ITEMS })}>
    <SearchView />
  </Base>
);

export default IndexPage;
