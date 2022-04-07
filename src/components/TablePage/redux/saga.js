import { takeEvery, put, call } from "redux-saga/effects";
import { LOAD_DATA,  loadDataSuccesAction } from "./actions";

async function getBeerItems() {
  const request = await fetch("http://localhost:3001/posts");
  const data = await request.json();
  return data;
}

function* workerSaga() {
  const data = yield call(getBeerItems);
  yield put(loadDataSuccesAction(data));
}

export function* watchLoadTableDataSaga() {
  yield takeEvery(LOAD_DATA, workerSaga);
}
