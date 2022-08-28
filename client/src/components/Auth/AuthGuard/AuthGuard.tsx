/** Interfaces/types */
import { useEffect, useState } from "react";

import { useAuth } from "hooks";
import { IUseAuthReturn } from "hooks/useAuth";
import { Role } from "lib/auth";
import { useRouter } from "next/router";
import { loginRoute, publicRoutes, RC_END, RC_START } from "routes/client";
import _ from "lodash";
import { USERFRONT_ID } from "consts";

/** components */

type IAuthGuardProps = {
  roles: Role[];
  children: JSX.Element;
};

const AuthGuard = ({ roles = [], children }: IAuthGuardProps) => {
  const router = useRouter();
  // Check if user has any of the roles
  const { user, isAuthenticated }: IUseAuthReturn = useAuth();
  const [show, setShow] = useState(false);

  useEffect(() => {
    verifyAccess(router.asPath);
    router.events.on(RC_START, setFalse(setShow));

    router.events.on(RC_END, verifyAccess);

    // Unsubscribe from events
    return () => {
      router.events.off(RC_START, setFalse(setShow));
      router.events.off(RC_END, verifyAccess);
    };
  }, []);

  const verifyAccess = (url: string) => {
    const path = url.split("?")[0]; // Remove the query from the url

    if (
      (!isAuthenticated &&
        !publicRoutes.some((route) => route.path === path)) ||
      !roles.some((role) => user.hasRole(role, { tenantID: USERFRONT_ID }))
    ) {
      // If user is authenticated and the url is not public, redirect
      setShow(false);
      router.push({
        pathname: loginRoute.path,
        query: { returnUrl: router.asPath },
      });
    } else {
      setShow(true);
    }
  };

  return show && children;
};

export default AuthGuard;

const setFalse = (fn) => () => fn(false);
