export type Route = {
  path: string;
  name: string;
};

export const newRecipeRoute: Route = {
  path: "/recipes/new",
  name: "New Recipe",
};

export const loginRoute: Route = {
  path: "/auth/login",
  name: "Login",
};

export const publicRoutes: Route[] = [loginRoute];

export const RC_START = "routeChangeStart";

export const RC_END = "routeChangeComplete";
