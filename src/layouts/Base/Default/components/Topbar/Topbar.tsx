import React from "react";
import _ from "lodash";
import Link from "next/link";
import getTheme from "theme";

/** Components */
import Toolbar from "@mui/material/Toolbar";
import Hidden from "@mui/material/Hidden";
import AuthButton from "components/Auth/AuthButton";
import { List, ListItem } from "@mui/material";

import theme from "theme";

interface ITopbarProps {
  className?: string;
  items?: React.ReactNode[];
  [rest: string]: any;
}

const Topbar = ({ className, items, rest }: ITopbarProps) => {
  const renderItems = () => items;
  return (
    <Toolbar
      className={className}
      sx={{
        maxWidth: theme.layout.contentWidth,
        margin: "auto",
        paddingInline: "0 !important",
        backgroundColor: theme.palette.background.paper,
      }}
      {...rest}
    >
      <Link href="/">
        <div style={{ cursor: "pointer" }}>Logo</div>
      </Link>
      <div
        style={{
          flexGrow: 1,
        }}
      />

      {/* <Hidden lgDown> */}
      <List
        disablePadding
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {items && renderItems()}
        <ListItem sx={{ whiteSpace: "nowrap", paddingRight: "0" }}>
          <AuthButton />
        </ListItem>
      </List>
      {/* </Hidden> */}
    </Toolbar>
  );
};
export default Topbar;
