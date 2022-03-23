import keys from "config/keys";
import { v4 as uuid4 } from "uuid";
import hmacSHA512 from "crypto-js/hmac-sha512";
import React from "react";

const { V1_ACCESS_KEY_ID, V1_SECRET_ACCESS_KEY } = keys;

export const getAuthorization = (): string =>
  hmacSHA512(
    V1_ACCESS_KEY_ID,
    V1_SECRET_ACCESS_KEY + Date.now() + uuid4()
  ).toString();

export enum Role {
  ADMIN = "admin",
  USER = "user",
}

export const authGaurd = (
  redirectFn: (path: string) => void,
  roles: Role[]
): void => {};
