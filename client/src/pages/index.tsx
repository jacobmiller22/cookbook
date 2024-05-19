import type { NextPage } from "next";
import { Base } from "lib/layouts";
import { SearchView, RecommendedView } from "lib/views";

/** Components */
import TopbarGroup from "lib/components/Atomics/TopbarGroup";

import RecipeProvider from "lib/contexts/recipes";
import { Typography } from "@mui/material";

const IndexPage: NextPage = () => (
  <Base divider>
    <RecipeProvider>
      <SearchView
        bannerContent={<Typography variant="h6">All recipes</Typography>}
      />
      <RecommendedView />
    </RecipeProvider>
  </Base>
);

export default IndexPage;
