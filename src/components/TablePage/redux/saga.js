import { takeEvery, put, call, select } from "redux-saga/effects";
import {
  LOAD_DATA,
  loadDataSuccesAction,
  loadDataFailureAction,
  SEARCH_LOAD_DATA,
  SORT_LOAD_TYPE,
  CHANGE_PAGE,
  ROWS_PER_PAGE,
} from "./actions";
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
  const data = await request.json();
  return data;
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

export function* watchLoadTableDataSaga() {
  yield takeEvery(
    [LOAD_DATA, SEARCH_LOAD_DATA, SORT_LOAD_TYPE, ROWS_PER_PAGE, CHANGE_PAGE],
    workerSagaBeerItems,
  );
}
