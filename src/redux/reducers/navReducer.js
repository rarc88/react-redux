import * as types from "../actions/actionTypes";

const initialState = {
  title: "Home",
};

const navState = (state, action) => {
  switch (action.type) {
    case types.NAV_CLICK:
      return {
        ...state,
        title: action.payload.title,
      };
    default:
      return state ?? initialState;
  }
};

export default navState;
