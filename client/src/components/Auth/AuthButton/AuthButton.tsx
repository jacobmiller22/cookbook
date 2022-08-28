/**
 *
 * AuthButton is a button that is used to log in or out of the application.
 *
 */

import Link from "next/link";
import { useState } from "react";

/** Auth */
import { useAuth } from "hooks";

/** Components */
import Button from "@mui/material/Button";

type AuthButtonProps = {
  showMsg?: boolean;
};

enum LoginStatus {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  _ = "",
}

const AuthButton = ({ showMsg = false }) => {
  const { isAuthenticated, logout } = useAuth();
  const [status, setStatus] = useState<LoginStatus>(LoginStatus._);

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

const getText = (
  status: LoginStatus,
  show: boolean,
  isAuthenticated: boolean
) => {
  switch (status) {
    case LoginStatus.PENDING:
      if (show && !isAuthenticated) {
        return "Logging In";
      }
      if (show && isAuthenticated) {
        return "Logging Out";
      }
    case LoginStatus.SUCCESS:
      if (show) {
        return "Success";
      }
    case LoginStatus.ERROR:
      if (show) {
        return "Error";
      }

    default:
      return isAuthenticated ? "Log Out" : "Log In";
  }
};
