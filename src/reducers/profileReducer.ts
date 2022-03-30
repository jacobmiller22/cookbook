import { MODAL_VARIANT } from "interfaces";

export const initialState = null;

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "": {
      return initialState;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default modalReducer;
