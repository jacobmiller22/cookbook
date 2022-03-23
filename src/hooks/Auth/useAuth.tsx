import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";
// @ts-ignore
import Userfront from "@userfront/react";
import { USERFRONT_ID } from "consts";
/** Interfaces/Types */
import { ILogin, IUserfrontUser } from "interfaces/Auth";
import { EStatus } from "interfaces/Feedback";

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
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // setTimeout(Userfront.refresh(), 10000);
    Userfront.tokens.refresh();
  }, []);

  // const login = async (credentials: ILogin) => {
  //   const res = await Userfront.login(credentials);

  //   // Handle login
  // };

  const logout = async ({ setStatus }: ILogout): Promise<void> => {
    setStatus && setStatus(EStatus.PENDING);
    await Userfront.logout();
    setStatus && setStatus(EStatus.SUCCESS);
  };

  return {
    user: Userfront.user,
    isAuthenticated: !!Userfront.accessToken(),
    login: Userfront.login,
    logout: logout,
    signup: Userfront.signup,
  };
};

export default useAuth;
