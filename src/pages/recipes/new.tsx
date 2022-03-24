import type { NextPage } from "next";
import { Base } from "layouts";
import { SearchView } from "views";

/** Components */
import TopbarGroup from "components/Atomics/TopbarGroup";
import { DEFAULT_TOPBAR_ITEMS } from "consts";
import NewRecipeView from "views/NewRecipeView";
import useAuth, { IUseAuthReturn } from "hooks/Auth/useAuth";
import { IUserfrontUser } from "interfaces/Auth";

import { loginRoute } from "routes";
import { AuthGuard } from "components/Auth";

const IndexPage: NextPage = () => {
  /** Auth Guard */
  // if (!isLoggedIn) redirectToLogin();

  return (
    //@ts-ignore
    <Base topbarItems={TopbarGroup({ items: DEFAULT_TOPBAR_ITEMS })}>
      <AuthGuard roles={[]}>
        <NewRecipeView />
      </AuthGuard>
    </Base>
  );
};

export default IndexPage;
