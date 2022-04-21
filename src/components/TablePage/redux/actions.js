export const LOAD_DATA = "LOAD_DATA";
export const LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS";
export const LOAD_DATA_FAILURE = "LOAD_DATA_FAILURE";
export const CLEAR_TABLE_REDUCER = "CLEAR_TABLE_REDUCER";
export const SEARCH_LOAD_DATA = "SEARCH_LOAD_DATA";
export const SORT_LOAD_TYPE = "SORT_LOAD_TYPE";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const ROWS_PER_PAGE = "ROWS_PER_PAGE";
export const PUT_DATA = "PUT_DATA";
export const SHOW_MODAL = "SHOW_MODAL";
export const FORM_RECEIVED = "FORM_RECEIVED";
export const FORM_FAILED = "FORM_FAILED";
// export const RESET_FORM = "RESET_FORM";

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
export const changePageAction = (payload) => ({
  type: CHANGE_PAGE,
  payload,
});

export const changeRowsPerPageAction = (payload) => ({
  type: ROWS_PER_PAGE,
  payload,
});

export const sendPutData = (payload) => ({
  type: PUT_DATA,
  payload,
});
export const showModalType = () => ({
  type: SHOW_MODAL,
});

export const receivedFormType = (payload) => ({
  type: FORM_RECEIVED,
  payload,
});
export const failedFormType = (payload) => ({
  type: FORM_FAILED,
  payload
});
// export const resetFormType = () => ({
//   type: RESET_FORM,
// });