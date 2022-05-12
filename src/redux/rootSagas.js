import { watchLoadTableDataSaga } from "../components/TablePage/redux/saga";

export default function* rootSaga() {
  yield watchLoadTableDataSaga();
}
