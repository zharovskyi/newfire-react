export const LOAD_DATA = "LOAD_DATA";
export const LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS";
export const LOAD_DATA_FAILURE = "LOAD_DATA_FAILURE";
export const CLEAR_TABLE_REDUCER = "CLEAR_TABLE_REDUCER";
export const SEARCH_LOAD_DATA = "SEARCH_LOAD_DATA";
export const SORT_LOAD_TYPE = "SORT_LOAD_TYPE";

export const loadDataAction = () => ({ type: LOAD_DATA });
export const loadDataSuccesAction = (payload) => ({
  type: LOAD_DATA_SUCCESS,
  payload,
});
export const loadDataFailureAction = (error) => ({
  type: LOAD_DATA_FAILURE,
  error,
});
export const clearTableReducerAction = () => ({ type: CLEAR_TABLE_REDUCER });

export const loadDataSearchAction = (payload) => ({
  type: SEARCH_LOAD_DATA,
  payload,
});

export const loadTypeSortAction = (payload) => ({
  type: SORT_LOAD_TYPE,
  payload,
});
