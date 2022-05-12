import { combineReducers } from "redux";
import tableReducer from "../components/TablePage/redux/reducers";

export const rootReducer = combineReducers({
  tableReducer: tableReducer,
});
