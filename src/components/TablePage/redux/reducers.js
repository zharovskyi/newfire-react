import { LOAD_DATA, LOAD_DATA_FAILURE, LOAD_DATA_SUCCESS } from "./actions";

const initialState = {
  beerData: [],
  loading: false,
  error: ""
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
      return {
        ...state,
        beerData: action.payload,
        loading: false,
      };
    }
    case LOAD_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
