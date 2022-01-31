import _ from "lodash";

import { List, ListItem } from "@mui/material";

const Recipes = ({ recipes }) => {
  const renderList = () => {
    return _.map(recipes, (recipe, i) => {
      return <ListItem key={i}>{recipe.title}</ListItem>;
    });
  };

  return <List>{renderList()}</List>;
};

export default Recipes;
