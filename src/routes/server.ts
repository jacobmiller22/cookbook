import { HttpMethod, Route } from "lib/http";
export const UF_API_ENDPOINT = "https://api.userfront.com";

export const MEMBER_RT: Route = {
  method: HttpMethod.GET,
  basePath: "",
  path: "/api/v1/member",
};

export const UF_SEARCH_USERS_RT: Route = {
  method: HttpMethod.POST,
  basePath: UF_API_ENDPOINT,
  path: "/v0/users/find",
};

export const UF_READ_USER_RT: Route = {
  method: HttpMethod.GET,
  basePath: UF_API_ENDPOINT,
  path: "/v0/users/*",
  wildcards: ["userId"],
  // Note: wildcard exists at end of path
};
