import {
  CHANGE_PAGE,
  CLEAR_TABLE_REDUCER,
  FORM_FAILED,
  FORM_RECEIVED,
  LOAD_DATA,
  LOAD_DATA_FAILURE,
  LOAD_DATA_SUCCESS,
  PUT_DATA,
  ROWS_PER_PAGE,
  SEARCH_LOAD_DATA,
  SHOW_MODAL,
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
  page: 0,
  limit: 2,
  isModalOpen: false,
  success: false,
  failed:false,
  formData: [],
};

export default function tableReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA: {
      return {
        ...state,
        loading: true,
        formData: [],
      };
    }
    case LOAD_DATA_SUCCESS: {
      const { data, time, query, order, sortTypeQuery } = action.payload;
      return {
        ...state,
        beerData: data,
        loading: false,
        currentTime: time,
        search: query,
        sortBy: sortTypeQuery,
        order: order,
        formData: [],
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
        page: 0,
      };
    }
    case SORT_LOAD_TYPE: {
      return {
        ...state,
        sortBy: action.payload,
        page: 0,
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
        page: 0,
      };
    }
    case PUT_DATA: {
      return {
        ...state,
        formData: action.payload,
        page: 0,
      };
    }
    case SHOW_MODAL: {
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    }
    case FORM_RECEIVED: {
      return {
        ...state,
        success: action.payload,
      };
    }
    case FORM_FAILED: {
      return {
        ...state,
        failed: action.payload,
      };
    }
    default:
      return state;
  }
}
