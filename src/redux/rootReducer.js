import { combineReducers } from "redux";
// import aboutReducer from "../components/About/redux/reducer";
// import contactReducer from "../components/Contacts/redux/reducers";
import tableReducer from "../components/TablePage/redux/reducers";

export const rootReducer = combineReducers({
  tableReducer: tableReducer,
  // aboutReducer: aboutReducer,
  // contactReducer: contactReducer,
});
