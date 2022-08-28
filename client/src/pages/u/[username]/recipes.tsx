import type { NextPage } from "next";
import { Base } from "lib/layouts";
import { RecipeListView, SearchView } from "lib/views";

/** Components */
import TopbarGroup from "lib/components/Atomics/TopbarGroup";

import { useAuth } from "lib/hooks";
import ProfileProvider from "lib/contexts/profile";
import RecipeProvider from "lib/contexts/recipes";

const UserRecipesPage: NextPage = () => {
  const { user } = useAuth();

  return (
    //@ts-ignore
    <Base divider>
      <ProfileProvider>
        <RecipeProvider useRoute>
          <RecipeListView />
        </RecipeProvider>
      </ProfileProvider>
    </Base>
  );
};

export default UserRecipesPage;
