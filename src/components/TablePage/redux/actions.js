export const LOAD_DATA = "LOAD_DATA";
export const LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS";
export const LOAD_DATA_FAILURE = "LOAD_DATA_FAILURE";

export const loadDataAction = () => ({ type: LOAD_DATA });
export const loadDataSuccesAction = (payload) => ({
  type: LOAD_DATA_SUCCESS,
  payload,
});
export const loadDataFailureAction = (error) => ({
  type: LOAD_DATA_FAILURE,
  error,
});
