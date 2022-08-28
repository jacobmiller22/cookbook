//@ts-ignore
import Userfront from "@userfront/react";
import { USERFRONT_ID, USERFRONT_SIGNUP_ID } from "consts";

Userfront.init(USERFRONT_ID);

const SignupForm = Userfront.build({
  toolId: USERFRONT_SIGNUP_ID,
});

const Signup = () => {
  return (
    <div>
      <SignupForm />
    </div>
  );
};

export default Signup;
