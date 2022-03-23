/** Interfaces/types */
import { useEffect, useState } from "react";
import useAuth, { IUseAuthReturn } from "hooks/Auth/useAuth";
import { Role } from "lib/auth";
import { useRouter } from "next/router";
import { loginRoute, publicRoutes, RC_END, RC_START } from "routes";

/** components */

type IAuthGuardProps = {
  roles: Role[];
  children: JSX.Element;
};

const AuthGuard = ({ roles, children }: IAuthGuardProps) => {
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

  const verifyAccess = (url) => {
    const path = url.split("?")[0]; // Remove the query from the url

    if (
      !isAuthenticated &&
      !publicRoutes.some((route) => route.path === path)
    ) {
      console;
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
