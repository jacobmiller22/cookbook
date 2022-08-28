import Link from "next/link";
import { useAuth } from "lib/hooks";
/** Interfaces/types */

/** components */
import { Button } from "@mui/material";
import { useEffect } from "react";

interface ISignupButtonProps {
  [rest: string]: any;
}

const SignupButton = ({ ...rest }: ISignupButtonProps) => {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    console.log(isAuthenticated);
  }, [isAuthenticated]);

  if (isAuthenticated) return null;

  return (
    <Link href="/auth/login">
      <Button variant="contained" color="primary" {...rest}>
        Sign up
      </Button>
    </Link>
  );
};

export default SignupButton;
