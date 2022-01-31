//@ts-ignore
import Userfront from "@userfront/react";
import { USERFRONT_ID, USERFRONT_LOGIN_ID } from "consts";

const Login = () => {
  Userfront.init(USERFRONT_ID);

  const LoginForm = Userfront.build({
    toolId: USERFRONT_LOGIN_ID,
  });

  return (
    <div>
      <LoginForm />
    </div>
  );
};
export default Login;
