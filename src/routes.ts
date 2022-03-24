export type Route = {
  path: string;
  name: string;
  wildcards?: string[];
};

export const newRecipeRoute: Route = {
  path: "/recipes/new",
  name: "New Recipe",
};

export const loginRoute: Route = {
  path: "/auth/login",
  name: "Login",
};

export const myRecipesRoute: Route = {
  path: "/u/*/recipes/",
  name: "My Recipes",
  wildcards: ["userId"],
};

export const profileRoute: Route = {
  path: "/u/*/",
  name: "Profile",
  wildcards: ["userId"],
};

export const publicRoutes: Route[] = [loginRoute];

export const RC_START = "routeChangeStart";

export const RC_END = "routeChangeComplete";

export const replaceWildcards = (route: Route, values: string[]) => {
  let path = route.path;
  for (let i = 0; i < route.wildcards?.length; i++) {
    path = path.replace(`*`, values[i]);
  }
  return path;
};
