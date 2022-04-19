import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../redux/rootSagas";
import { rootReducer } from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,

  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
