import _ from "lodash";

import { List, ListItem } from "@material-ui/core";

const Recipes = ({ recipes }) => {
  const renderList = () => {
    return _.map(recipes, (recipe, i) => {
      return <ListItem key={i}>recipe</ListItem>;
    });
  };

  return <List>{renderList()}</List>;
};

export default Recipes;
