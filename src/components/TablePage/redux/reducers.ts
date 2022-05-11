import {
  CHANGE_PAGE,
  CLEAR_TABLE_REDUCER,
  EDIT_ROW,
  LOAD_DATA,
  LOAD_DATA_FAILURE,
  LOAD_DATA_SUCCESS,
  PUT_DATA,
  ROWS_PER_PAGE,
  SEARCH_LOAD_DATA,
  SHOW_MODAL,
  SORT_LOAD_TYPE,
  EDIT_ROW_DATA,
  PUT_EDITOR_DATA,
} from "./actions";

type BeerData = {
  id: number,
  name: string,
  type: string,
  alcohol: number,
  bittenesrs: number,
  capacity: number,
};

type FormData = {
  name: string,
  type: string,
  alcohol: number,
  bittenesrs: number,
  capacity: number,
}

type InitialStateData = {
  beerData: BeerData[],
  loading:boolean,
  error: string,
  currentTime: string,
  search: string,
  sortBy: string,
  order: string,
  page: number,
  limit: number,
  isModalOpen: boolean,
  isEditModalType: boolean,
  formData: FormData,
};

const initialState: InitialStateData = {
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
  isEditModalType: false,
  formData: {
    name: "",
    type: "",
    alcohol: 0,
    bittenesrs: 0,
    capacity: 0,
  },
};

export default function tableReducer(state = initialState, action:any) {
  switch (action.type) {
    case LOAD_DATA: {
      return {
        ...state,
        loading: true,
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
        formData: [],
        page: 0,
      };
    }
    case SHOW_MODAL: {
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    }
    case EDIT_ROW: {
      return {
        ...state,
        id: action.payload,
        isEditModalType: true,
      };
    }
    case EDIT_ROW_DATA: {
      return {
        ...state,
        formData: action.payload,
        isEditModalType: true,
      };
    }

    case PUT_EDITOR_DATA: {
      return {
        ...state,
        formData: [],
        isEditModalType: false,
      };
    }
    default:
      return state;
  }
}
