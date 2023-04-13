import axios from "axios";
import * as types from "./actionTypes";

export const sendingData = () => ({
  type: types.SENDING_DATA,
  payload: {
    loading: true,
  },
});

export const requestData = (data) => ({
  type: types.REQUEST_DATA,
  payload: {
    list: data,
    loading: false,
  },
});

export const requestError = (error) => ({
  type: types.REQUEST_ERROR,
  payload: {
    error: error,
    loading: false,
  },
});

export const fetchData = () => async (dispatch) => {
  try {
    dispatch(sendingData());
    const result = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
    );
    if (result.status === 200) {
      dispatch(requestData(result.data.results));
    }
  } catch (error) {
    dispatch(requestError(error));
  }
};
