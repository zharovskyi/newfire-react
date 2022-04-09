/* eslint-disable no-unreachable */
import {
  takeEvery,
  put,
  call,
  // takeLatest,
  select,
  fork,
} from "redux-saga/effects";
import {
  LOAD_DATA,
  loadDataSuccesAction,
  loadDataFailureAction,
  SEARCH_LOAD_DATA,
  loadDataSearchAction,
} from "./actions";
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
async function getBeerItems() {
  const request = await fetch("http://localhost:3001/posts");
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
  const request = await fetch(`http://localhost:3001/profile?q=${query}`);
  const data = await request.json();
  return data;
}

function* workerSagaSearchItems() {
  const selectSearchQuery = (state) => state.tableReducer.search;

  try {
    const query = yield select(selectSearchQuery);

    const searchData = yield call(getSearchBeerItems(query));

    yield put(loadDataSearchAction(searchData));
  } catch (error) {
    // console.log("error :>> ", error);
    yield put(loadDataFailureAction(error));
  }
}

export function* watchLoadTableDataSaga() {
  // yield takeEvery(LOAD_DATA, workerSagaBeerItems);
  yield takeEvery(SEARCH_LOAD_DATA, workerSagaSearchItems);
  yield fork(workerSagaBeerItems);
}
