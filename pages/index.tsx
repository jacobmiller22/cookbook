import type { NextPage } from "next";
import { Split } from "layouts";
import { IndexView } from "views";

/** Components */
import TopbarGroup from "components/Atomics/TopbarGroup";
import { DEFAULT_TOPBAR_ITEMS } from "consts";

const IndexPage: NextPage = () => (
  //@ts-ignore
  <Split topbarItems={TopbarGroup({ items: DEFAULT_TOPBAR_ITEMS })}>
    <IndexView />
  </Split>
);

export default IndexPage;
