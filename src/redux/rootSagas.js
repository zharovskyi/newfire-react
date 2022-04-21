import { watchLoadTableDataSaga } from "../components/TablePage/redux/saga";
// import { watchPutFormDataSaga } from "../shared/Modal/redux/saga";

export default function* rootSaga() {

  yield watchLoadTableDataSaga();
  // yield watchPutFormDataSaga();
}

// export default  {
//      watchClickSaga();
//   }

/// read about
