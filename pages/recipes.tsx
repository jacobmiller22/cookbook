import { NextPage } from "next";
import { RecipeListView } from "views";
import {Base} from "../src/layouts";
import WithLayout from "WithLayout";

const RecipesPage: NextPage = () => {
  return (
    //@ts-expect-error
    <WithLayout component={RecipeListView} layout={Base} title="Recipes" />
  );
};

export default RecipesPage;
