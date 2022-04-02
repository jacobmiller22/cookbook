import { useReducer } from "react";

/**
 * React hook that can be used to force a re-render of a component.
 *
 * Using this is discouraged, but it is useful in some cases.
 *
 * @returns {() => void} A function that will force a re-render.
 */
const useForceUpdate = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  return forceUpdate;
};

export default useForceUpdate;
