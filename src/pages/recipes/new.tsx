import type { NextPage } from "next";
import { Base } from "layouts";
import { SearchView } from "views";

/** Components */
import TopbarGroup from "components/Atomics/TopbarGroup";
import { DEFAULT_TOPBAR_ITEMS } from "consts";
import NewRecipeView from "views/NewRecipeView";

import { AuthGuard } from "components/Auth";
import { Role } from "lib/auth";

const IndexPage: NextPage = () => {
  /** Auth Guard */
  // if (!isLoggedIn) redirectToLogin();

  return (
    //@ts-ignore
    <Base topbarItems={TopbarGroup({ items: DEFAULT_TOPBAR_ITEMS })}>
      <AuthGuard roles={[Role.MEMBER]}>
        <NewRecipeView />
      </AuthGuard>
    </Base>
  );
};

export default IndexPage;
