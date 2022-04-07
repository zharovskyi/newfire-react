/* eslint-disable no-debugger */
import { takeEvery, put, call } from "redux-saga/effects";

async function getBeerItems() {
    const request = await fetch("http://localhost:3001/posts");
    const data = await request.json();
    return data;
//   try {
//     fetch("http://localhost:3001/posts")
//       .then((response) => response.json())
//       .then((data) => data);
//   } catch (error) {
//     console.log("error :>> ", error);
//   }
}

function* workerSaga() {
  const data = yield call(getBeerItems);
  yield put({ type: "REQUEST_DATA", payload: data });
}

export function* watchClickSaga() {
  yield takeEvery("LOAD_DATA", workerSaga);
}

















// export default function* WatchContactSaga() {
//     yield takeEvery("REQUEST_DATA",getContactDataWorker)
// }
// function* getContactDataWorker(action){
//     yield put("REQUEST_DATA",action)
//     try {
//         yield fetch("REQUEST_DATA",action)

//     } catch (error) {

//     }
// }
