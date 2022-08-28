import type { NextPage } from "next";
import { Base } from "lib/layouts";
import { SearchView } from "lib/views";

/** Components */
import TopbarGroup from "lib/components/Atomics/TopbarGroup";
import { DEFAULT_TOPBAR_ITEMS } from "consts";
import RecipeProvider from "lib/contexts/recipes";
import { Typography } from "@mui/material";

const IndexPage: NextPage = () => (
  <Base topbarItems={TopbarGroup({ items: DEFAULT_TOPBAR_ITEMS })} divider>
    <RecipeProvider>
      <SearchView
        bannerContent={<Typography variant="h6">All recipes</Typography>}
      />
    </RecipeProvider>
  </Base>
);

export default IndexPage;
