import React from "react";

/** Components */
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import HamburgerIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

interface ISidebarProps {
  listItems?: React.ReactNode[];
}

const Sidebar = ({ listItems }: ISidebarProps) => {
  return (
    <List>
      <ListItem>
        <Typography>Goals</Typography>
        <div style={{ flexGrow: 1 }} />
        <IconButton>
          <HamburgerIcon />
        </IconButton>
      </ListItem>
      <Divider />
      {listItems}
    </List>
  );
};

export default Sidebar;
