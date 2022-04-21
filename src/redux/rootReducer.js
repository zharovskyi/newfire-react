import { combineReducers } from "redux";
import tableReducer from "../components/TablePage/redux/reducers";
// import modalReducer from "../shared/Modal/redux/reducers";

export const rootReducer = combineReducers({
  tableReducer: tableReducer,
  // modalReducer: modalReducer,
});
