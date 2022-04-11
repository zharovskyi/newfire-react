/* eslint-disable no-debugger */
import {
  CLEAR_TABLE_REDUCER,
  LOAD_DATA,
  LOAD_DATA_FAILURE,
  LOAD_DATA_SUCCESS,
  SEARCH_LOAD_DATA,
  SEARCH_RESULT_DATA,
} from "./actions";

const initialState = {
  beerData: [],
  loading: false,
  error: "",
  currentTime: "",
  search: "",
};

export default function tableReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_DATA_SUCCESS: {
      const { data, time } = action.payload;
      return {
        ...state,
        beerData: data,
        loading: false,
        currentTime: time,
      };
    }
    case LOAD_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        error: "Something went wrong",
      };
    }
    case CLEAR_TABLE_REDUCER: {
      return initialState;
    }
    case SEARCH_LOAD_DATA: {
      return {
        ...state,
        search: action.payload,
      };
    }
    case SEARCH_RESULT_DATA: {
      return {
        ...state,
        beerData: action.payload,
      };
    }
    default:
      return state;
  }
}
