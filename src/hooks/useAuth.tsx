import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";
// @ts-ignore
import Userfront from "@userfront/react";
import { USERFRONT_ID } from "consts";
/** Interfaces/Types */
import { ILogin, IUserfrontUser } from "interfaces/Auth";
import { EStatus } from "interfaces/Feedback";
import { ConstructionOutlined } from "@mui/icons-material";

Userfront.init(USERFRONT_ID);

interface ILogout {
  setStatus?: Dispatch<SetStateAction<EStatus>> | undefined;
}

export interface IUseAuthReturn {
  isAuthenticated: boolean;
  user: IUserfrontUser;
  login: () => void;
  logout: ({ setStatus }: ILogout) => Promise<void>;
  signup: () => void;
}

const useAuth = (): IUseAuthReturn => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!Userfront.accessToken()
  );
  const router = useRouter();

  useEffect(() => {
    console.log("use effect", isAuthenticated);
  }, [isAuthenticated]);

  const checkAuth = async () => {
    setIsAuthenticated(!!Userfront.accessToken());
  };
  // const login = async (credentials: ILogin) => {
  //   const res = await Userfront.login(credentials);

  //   // Handle login
  // };

  const logout = async ({ setStatus }: ILogout): Promise<void> => {
    setStatus && setStatus(EStatus.PENDING);

    await Userfront.logout();

    setStatus && setStatus(EStatus.SUCCESS);
    setTimeout(() => {
      setStatus(EStatus._);
    }, 4000);

    checkAuth();
  };

  return {
    user: Userfront.user,
    isAuthenticated,
    login: Userfront.login,
    logout: logout,
    signup: Userfront.signup,
  };
};

export default useAuth;
