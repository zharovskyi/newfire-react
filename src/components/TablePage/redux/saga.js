/* eslint-disable no-unreachable */
import {
  takeEvery,
  put,
  call,
  select,
  takeLatest,
} from "redux-saga/effects";
import {
  LOAD_DATA,
  loadDataSuccesAction,
  loadDataFailureAction,
  SEARCH_LOAD_DATA,
  loadSearchResultAction,
} from "./actions";
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
async function getBeerItems(query = "") {
  const request = await fetch(`http://localhost:3001/rows?q=${query}`);
  const data = await request.json();
  return data;
}

function* workerSagaBeerItems() {
  try {
    const data = yield call(getBeerItems);
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = addZero(currentTime.getMinutes());
    const sec = addZero(currentTime.getSeconds());
    const time = `${hours}:${minutes}:${sec}`;
    yield put(loadDataSuccesAction({ data, time }));
  } catch (error) {
    console.log("error :>> ", error);
    yield put(loadDataFailureAction(error));
  }
}

async function getSearchBeerItems(query) {
  const request = await fetch(`http://localhost:3001/rows?q=${query}`);
  const data = await request.json();

  return data;
}

function* workerSagaSearchItems() {
  const selectSearchQuery = (state) => state.tableReducer.search;

  try {
    const query = yield select(selectSearchQuery);

    const searchData = yield call(getSearchBeerItems, query);

    yield put(loadSearchResultAction(searchData));
  } catch (error) {
    console.log("error :>> ", error);
    yield put(loadDataFailureAction(error));
  }
}

export function* watchLoadTableDataSaga() {
  yield takeEvery(LOAD_DATA, workerSagaBeerItems);
  yield takeLatest(SEARCH_LOAD_DATA, workerSagaSearchItems);
  // yield fork(workerSagaBeerItems);
}
