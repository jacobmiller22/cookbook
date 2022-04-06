import type { NextPage } from "next";
import { Base } from "layouts";
import { SearchView } from "views";

/** Components */
import TopbarGroup from "components/Atomics/TopbarGroup";
import { DEFAULT_TOPBAR_ITEMS } from "consts";
import RecipeProvider from "contexts/recipes";
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
