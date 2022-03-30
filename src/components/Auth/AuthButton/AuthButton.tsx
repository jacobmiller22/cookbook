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
import { EStatus } from "interfaces/Feedback";

const AuthButton = () => {
  const { isAuthenticated, logout } = useAuth();
  const [status, setStatus] = useState<EStatus>(EStatus._);

  const renderButton = () => {
    if (isAuthenticated) {
      const text =
        status === EStatus._
          ? "Log Out"
          : status === EStatus.PENDING
          ? "Logging Out"
          : status === EStatus.SUCCESS
          ? "Success"
          : "Error";
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

    const text =
      status === EStatus._
        ? "Log In"
        : status === EStatus.PENDING
        ? "Logging In"
        : status === EStatus.SUCCESS
        ? "Success"
        : "Error";
    return (
      <Link href="/auth/login">
        <Button variant="outlined">{text}</Button>
      </Link>
    );
  };

  return <div>{renderButton()}</div>;
};

export default AuthButton;
