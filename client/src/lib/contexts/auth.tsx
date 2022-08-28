import { useEffect, useState, createContext } from "react";
import { useRouter } from "next/router";
import { EStatus } from "lib/util/types";

/** Userfront imports */
import Userfront from "@userfront/react";
import { USERFRONT_ID } from "consts";

Userfront.init(USERFRONT_ID);

export type TAuthCtx = {
  user: any;
  isAuthenticated: boolean;
  login: any;
  logout: any;
  signup: any;
};

export const AuthCtx = createContext<TAuthCtx>(null);

const initialState = null;

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!Userfront.accessToken()
  );
  const router = useRouter();

  useEffect(() => {
    console.log("useAuth use effect", isAuthenticated);
  }, [isAuthenticated]);

  const checkAuth = async () => {
    setIsAuthenticated(!!Userfront.accessToken());
  };

  const logout = async ({ setStatus }): Promise<void> => {
    setStatus && setStatus(EStatus.PENDING);

    await Userfront.logout();

    setStatus && setStatus(EStatus.SUCCESS);
    setTimeout(() => {
      setStatus(EStatus._);
    }, 4000);

    checkAuth();
  };

  return (
    <AuthCtx.Provider
      value={{
        user: Userfront.user,
        isAuthenticated,
        login: Userfront.login,
        logout: logout,
        signup: Userfront.signup,
      }}
    >
      {children}
    </AuthCtx.Provider>
  );
};
export default AuthProvider;
