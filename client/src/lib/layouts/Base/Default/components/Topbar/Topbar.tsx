import React, { useRef, useEffect } from "react";
import _ from "lodash";
import Link from "next/link";
import getTheme from "lib/theme";

/** Components */
import Toolbar from "@mui/material/Toolbar";
import Hidden from "@mui/material/Hidden";
import AuthButton from "lib/components/Auth/AuthButton";
import { List, ListItem, ListItemText } from "@mui/material";

import theme from "lib/theme";
import { useAuth, useHasMounted } from "lib/hooks";
import {
  myProfileRoute,
  myRecipesRoute,
  profileRoute,
  Route,
} from "lib/routes/client";
import { replaceWildcards } from "lib/routes";
import { SignupButton } from "lib/components/Auth";

interface ITopbarProps {
  className?: string;
  items?: React.ReactNode[];
  [rest: string]: any;
}

const Topbar = ({ className, items, rest }: ITopbarProps) => {
  const { user, isAuthenticated } = useAuth();
  const listRef = useRef(null);
  const hasMounted = useHasMounted();

  useEffect(() => {
    console.log("Topbar isAuthen", isAuthenticated);
  }, [listRef, isAuthenticated, user]);

  const renderAuthItems = () => [
    hasMounted && (
      <ListItem
        key="auth-button"
        sx={{ whiteSpace: "nowrap" }}
        disableGutters={isAuthenticated}
      >
        <AuthButton />
      </ListItem>
    ),
    hasMounted && !isAuthenticated && (
      <ListItem key="signup-button" disableGutters>
        <SignupButton sx={{ whiteSpace: "nowrap" }} />
      </ListItem>
    ),
  ];

  const renderItems = () => items;

  return (
    <Toolbar
      className={className}
      sx={{
        maxWidth: theme.layout.contentWidth,
        margin: "auto",
        backgroundColor: theme.palette.background.paper,
        paddingX: "0px !important",
      }}
      {...rest}
    >
      <Link href="/">
        <div style={{ cursor: "pointer" }}>RecipeX</div>
      </Link>
      <div
        style={{
          flexGrow: 1,
        }}
      />

      <List
        disablePadding
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        ref={listRef}
      >
        {items && renderItems()}
        <RouteLink route={myRecipesRoute} replace={[user.username]} />
        <RouteLink route={myProfileRoute} replace={[]} />
        {renderAuthItems()}
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
