import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./components/ReduxTrain/store/store";
import ReduxTrain from "./components/ReduxTrain/ReduxTrain";
import ReduxTrainSecond from "./components/ReduxTrain/ReduxTrainSecond";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <ReduxTrain />
      <ReduxTrainSecond />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root"),
);
