/* eslint-disable no-debugger */
import {
  CHANGE_PAGE,
  CLEAR_TABLE_REDUCER,
  LOAD_DATA,
  LOAD_DATA_FAILURE,
  LOAD_DATA_SUCCESS,
  ROWS_PER_PAGE,
  SEARCH_LOAD_DATA,
  SORT_LOAD_TYPE,
} from "./actions";

const initialState = {
  beerData: [],
  loading: false,
  error: "",
  currentTime: "",
  search: "",
  sortBy: "",
  order: "",
  page: 1,
  limit: 2,
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
      const { data, time, query, order, sortTypeQuery, page, rowsPerPage } =
        action.payload;
      return {
        ...state,
        beerData: data,
        loading: false,
        currentTime: time,
        search: query,
        sortBy: sortTypeQuery,
        order: order,
        // page: page,
        // limit: rowsPerPage,
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
    case SORT_LOAD_TYPE: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case ROWS_PER_PAGE: {
      return {
        ...state,
        limit: action.payload,
      };
    }

    default:
      return state;
  }
}
