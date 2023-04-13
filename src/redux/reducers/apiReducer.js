import * as types from "../actions/actionTypes";

const initialState = {
  list: [],
  loading: false,
};

const apiState = (state, action) => {
  switch (action.type) {
    case types.SENDING_DATA:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case types.REQUEST_DATA:
      return {
        ...state,
        list: action.payload.list,
        loading: action.payload.loading,
      };
    case types.REQUEST_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: action.payload.loading,
      };
    default:
      return state ?? initialState;
  }
};

export default apiState;
