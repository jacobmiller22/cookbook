import { MODAL_VARIANT } from "lib/modal/types";

export const initialState = {
  type: MODAL_VARIANT.CLOSED,
  open: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type as MODAL_VARIANT) {
    case MODAL_VARIANT.FORM: {
      return {
        ...state,
        type: action.type,
        open: true,
        content: {
          title: action.payload.title,
          body: action.payload.body,
          bodyProps: action.payload.bodyProps,
        },
      };
    }
    case MODAL_VARIANT.CLOSED: {
      return initialState;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
      // return { ...state };
    }
  }
};

export default modalReducer;
