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
export const EDIT_ROW = "EDIT_ROW";
export const EDIT_ROW_DATA = "EDIT_ROW_DATA";
export const CHANGE_INPUT_DATA = "CHANGE_INPUT_DATA";
export const PUT_EDITOR_DATA = "PUT_EDITOR_DATA";

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
export const editRowType = (payload) => ({
  type: EDIT_ROW,
  payload,
});
export const editRowDataType = (payload) => ({
  type: EDIT_ROW_DATA,
  payload,
});

export const sendPutEditorData = (payload) => ({
  type: PUT_EDITOR_DATA,
  payload,
});
