/* eslint-disable no-unreachable */
import { takeEvery, takeLatest, put, call, select } from "redux-saga/effects";
import {
  LOAD_DATA,
  loadDataSuccesAction,
  loadDataFailureAction,
  SEARCH_LOAD_DATA,
  SORT_LOAD_TYPE,
  CHANGE_PAGE,
  ROWS_PER_PAGE,
  PUT_DATA,
  showModalType,
} from "./actions";
import { toast } from "react-toastify";

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

const my_url = new URL("http://localhost:3001/rows");

const parameters = {
  q: "",
  _sort: "",
  _order: "",
  _page: 1,
  _limit: 2,
};
function generateQueryParams(url, queryParams) {
  let urlWithParams = `${url}?`;
  const res = {};
  Object.entries(queryParams).forEach(([name, value]) => {
    if (value && name) {
      res[name] = value;
    }
  });
  let params = new URLSearchParams(res);
  return urlWithParams + params;
}

async function getBeerItems(parameters) {
  const request = await fetch(generateQueryParams(my_url, parameters));
  let total = request.headers.get("X-Total-Count");
  const data = await request.json();
  const res = { data, total };
  return res;
}

function putFormData(data) {
  return fetch(my_url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  }).catch((error) => {
    console.log("ERROR", error);
  });
}
function* workerSagaBeerItems() {
  const selectSearchQuery = (state) => state.tableReducer.search;
  const orderType = (state) => state.tableReducer.order;
  const sortType = (state) => state.tableReducer.sortBy;
  const rowsPerPages = (state) => state.tableReducer.limit;
  const pages = (state) => state.tableReducer.page;

  const query = yield select(selectSearchQuery);
  const sortTypeQuery = yield select(sortType);
  const rowsPerPage = yield select(rowsPerPages);
  const page = yield select(pages);
  let order = yield select(orderType);

  if (order === "asc") {
    order = "desc";
  } else {
    order = "asc";
  }
  if (query) {
    parameters.q = query;
  }
  if (sortTypeQuery) {
    parameters._sort = sortTypeQuery;
  }
  parameters._order = order;
  parameters._limit = rowsPerPage;
  parameters._page = page + 1;
  try {
    const data = yield call(getBeerItems, parameters);
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = addZero(currentTime.getMinutes());
    const sec = addZero(currentTime.getSeconds());
    const time = `${hours}:${minutes}:${sec}`;
    yield put(
      loadDataSuccesAction({
        data,
        time,
        sortTypeQuery,
        order,
      }),
    );
  } catch (error) {
    console.log("error :>> ", error);
    yield put(loadDataFailureAction(error));
  }
}
function* workerSagaPutFormData(action) {
  const { data: datas, onSucessCleanFormCalback } = action.payload;
  try {
    yield call(putFormData, datas);
    yield put(showModalType(false));
    yield call(workerSagaBeerItems);
    if (onSucessCleanFormCalback) {
      onSucessCleanFormCalback();
    }
    toast.success("Thank you for filling out your information!");
  } catch (error) {
    console.log("workerSaga ", error);
    toast.error("Something went wrong.");
  }
}
export function* watchLoadTableDataSaga() {
  yield takeEvery(
    [LOAD_DATA, SEARCH_LOAD_DATA, SORT_LOAD_TYPE, ROWS_PER_PAGE, CHANGE_PAGE],
    workerSagaBeerItems,
  );
  yield takeLatest([PUT_DATA], workerSagaPutFormData);
}
