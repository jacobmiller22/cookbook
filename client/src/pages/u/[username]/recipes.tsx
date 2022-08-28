import type { NextPage } from "next";
import { Base } from "layouts";
import { RecipeListView, SearchView } from "views";

/** Components */
import TopbarGroup from "components/Atomics/TopbarGroup";
import { DEFAULT_TOPBAR_ITEMS } from "consts";
import MinUserCard from "components/Atomics/MinUserCard";
import { useAuth } from "hooks";
import ProfileProvider from "contexts/profile";
import RecipeProvider from "contexts/recipes";

const UserRecipesPage: NextPage = () => {
  const { user } = useAuth();

  return (
    //@ts-ignore
    <Base topbarItems={TopbarGroup({ items: DEFAULT_TOPBAR_ITEMS })} divider>
      <ProfileProvider>
        <RecipeProvider useRoute>
          <RecipeListView />
        </RecipeProvider>
      </ProfileProvider>
    </Base>
  );
};

export default UserRecipesPage;
