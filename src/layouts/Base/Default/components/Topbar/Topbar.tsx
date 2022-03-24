import React from "react";
import _ from "lodash";
import Link from "next/link";
import getTheme from "theme";

/** Components */
import Toolbar from "@mui/material/Toolbar";
import Hidden from "@mui/material/Hidden";
import AuthButton from "components/Auth/AuthButton";
import { List, ListItem, ListItemText } from "@mui/material";

import theme from "theme";
import useAuth from "hooks/Auth/useAuth";
import { myRecipesRoute, profileRoute, replaceWildcards, Route } from "routes";

interface ITopbarProps {
  className?: string;
  items?: React.ReactNode[];
  [rest: string]: any;
}

const Topbar = ({ className, items, rest }: ITopbarProps) => {
  const { user } = useAuth();

  const renderItems = () => items;
  return (
    <Toolbar
      className={className}
      sx={{
        maxWidth: theme.layout.contentWidth,
        margin: "auto",
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
        <RouteLink route={myRecipesRoute} replace={[user.username]} />
        <RouteLink route={profileRoute} replace={[user.username]} />

        <ListItem sx={{ whiteSpace: "nowrap", paddingRight: "0" }}>
          <AuthButton />
        </ListItem>
      </List>
      {/* </Hidden> */}
    </Toolbar>
  );
};
export default Topbar;

const RouteLink = ({ route, replace }: { route: Route; replace: string[] }) => {
  return (
    <Link href={replaceWildcards(route, replace)}>
      <ListItem
        component="a"
        sx={{
          "&:hover": {
            textDecoration: "underline",
            cursor: "pointer",
          },
        }}
      >
        <ListItemText
          primaryTypographyProps={{
            sx: {
              whiteSpace: "nowrap",
            },
          }}
        >
          {route.name}
        </ListItemText>
      </ListItem>
    </Link>
  );
};
