/**
 *
 * AuthButton is a button that is used to log in or out of the application.
 *
 */

import Link from "next/link";
import { useState } from "react";
import { EStatus } from "lib/util/types";

/** Auth */
import { useAuth } from "lib/hooks";

/** Components */
import Button from "@mui/material/Button";

type AuthButtonProps = {
  showMsg?: boolean;
};

const AuthButton = ({ showMsg = false }: AuthButtonProps) => {
  const { isAuthenticated, logout } = useAuth();
  const [status, setStatus] = useState<EStatus>(EStatus._);

  const text = getText(status, showMsg, isAuthenticated);

  if (isAuthenticated) {
    return (
      <Button
        variant="outlined"
        onClick={async () => {
          await logout({ setStatus });
        }}
      >
        {text}
      </Button>
    );
  }

  return (
    <Link href="/auth/login">
      <Button variant="outlined">{text}</Button>
    </Link>
  );
};

export default AuthButton;

const getText = (status: EStatus, show: boolean, isAuthenticated: boolean) => {
  switch (status) {
    case EStatus.PENDING:
      if (show && !isAuthenticated) {
        return "Logging In";
      }
      if (show && isAuthenticated) {
        return "Logging Out";
      }
    case EStatus.SUCCESS:
      if (show) {
        return "Success";
      }
    case EStatus.ERROR:
      if (show) {
        return "Error";
      }

    default:
      return isAuthenticated ? "Log Out" : "Log In";
  }
};
