import { NextPage } from "next";
import { RecipeListView } from "views";
import Layout from "../src/layouts/Layout";
import WithLayout from "WithLayout";

const RecipesPage: NextPage = () => {
  return (
    //@ts-expect-error
    <WithLayout component={RecipeListView} layout={Layout} title="Recipes" />
  );
};

export default RecipesPage;
