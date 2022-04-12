/* eslint-disable no-unreachable */
import { takeEvery, put, call, select } from "redux-saga/effects";
import {
  LOAD_DATA,
  loadDataSuccesAction,
  loadDataFailureAction,
  SEARCH_LOAD_DATA,
  SORT_LOAD_TYPE,
} from "./actions";
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
// function generateQueryParams(url, queryParams) {
//   let urlWithParams = `${url}?`;
//   Object.keys(queryParams).forEach((key, index) => {
//     const paramsElement = queryParams[key];
//     if (paramsElement || paramsElement === false || paramsElement === 0) {
//       let param = "";
//       if (typeof paramsElement === "object") {
//         paramsElement.forEach((value, index) => {
//           param += this._getAdjustedParameter(
//             index,
//             paramsElement,
//             `${key}=${value}`,
//           );
//         });
//       } else {
//         param = `${key}=${paramsElement}`;
//       }
//       urlWithParams += this._getAdjustedParameter(index, queryParams, param);
//     }
//   });
//   console.log("urlWithParams", urlWithParams);
//   return urlWithParams;
// }

// const queryParams = { search: "", sort: "asc", page: 1 };
// generateQueryParams("http://localhost:3001/rows", queryParams);

const my_url = new URL("http://localhost:3001/rows");

// const parameters = {
//   query: "",
//   sortType: "",
//   order: "",
// };

// Object.entries(parameters).forEach(([name, value]) =>
//   my_url.searchParams.set(name, value),
// );

// console.log("my_url.href", my_url.href);
async function getBeerItems( query = "", sortType = "", order = "" ) {
  const request = await fetch(
    `${my_url}?q=${query}&_sort=${sortType}&_order=${order}`,
  );
  const data = await request.json();
  return data;
}

function* workerSagaBeerItems() {
  const selectSearchQuery = (state) => state.tableReducer.search;
  const orderType = (state) => state.tableReducer.order;
  const sortType = (state) => state.tableReducer.sortBy;

  const query = yield select(selectSearchQuery);
  let order = yield select(orderType);
  if (order === "asc") {
    order = "desc";
  } else {
    order = "asc";
  }
  const sortTypeQuery = yield select(sortType);

  try {
    const data = yield call(getBeerItems, query, sortTypeQuery, order);
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = addZero(currentTime.getMinutes());
    const sec = addZero(currentTime.getSeconds());
    const time = `${hours}:${minutes}:${sec}`;
    yield put(loadDataSuccesAction({ data, time, sortTypeQuery, order }));
  } catch (error) {
    console.log("error :>> ", error);
    yield put(loadDataFailureAction(error));
  }
}

export function* watchLoadTableDataSaga() {
  yield takeEvery(
    [LOAD_DATA, SEARCH_LOAD_DATA, SORT_LOAD_TYPE],
    workerSagaBeerItems,
  );
}
