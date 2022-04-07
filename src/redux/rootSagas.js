// import { watchClickSaga } from "../components/Contacts/redux/saga";
import { watchLoadTableDataSaga } from "../components/TablePage/redux/saga";

export default function* rootSaga() {
  //   yield watchClickSaga();

  yield watchLoadTableDataSaga();
}

// export default  {
//      watchClickSaga();
//   }

/// read about
