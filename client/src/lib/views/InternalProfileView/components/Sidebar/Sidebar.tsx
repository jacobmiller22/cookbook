import type { Dispatch, SetStateAction } from "react";
import { hex2rgba } from "lib/color";
/** Interfaces/types */

/** components */
import theme from "lib/theme";
import { ListItem, List, ListItemText } from "@mui/material";

interface ISidebarProps {
  items: {
    label: string;
    type: string;
  }[];
  state: [string, Dispatch<SetStateAction<string>>];
}

const Sidebar = ({ items, state }: ISidebarProps) => {
  const renderSidebarItems = () => {
    return items.map((item, i: number) => {
      const isActive = item.type === state[0];

      return (
        <ListItem
          sx={{
            borderRight: "4px solid",
            borderColor: isActive
              ? theme.palette.primary.main
              : hex2rgba(theme.palette.primary.main, 0.2),
          }}
          button
          key={`sidebar-item-${i}`}
          onClick={() => state[1](item.type)}
          selected={isActive}
        >
          <ListItemText>{item.label}</ListItemText>
        </ListItem>
      );
    });
  };

  return <List>{renderSidebarItems()}</List>;
};

export default Sidebar;
