import { createStore, combineReducers } from "redux";

const reducer = (state = { startValue: 0 }, action) => {
  // eslint-disable-next-line no-debugger

  switch (action.type) {
    case "INCREMENT":
      return { startValue: state.startValue + 1 };
    case "DECREMENT":
      return { startValue: state.startValue - 1 };
    default:
      return state;
  }
};

const reducer2 = (state = { startValue2: 0 }, action) => {
  // eslint-disable-next-line no-debugger
  switch (action.type) {
    case "INCREMENTS":
      return { startValue2: state.startValue2 + 1 };
    case "DECREMENTS":
      return { startValue2: state.startValue2 - 1 };
    default:
      return state;
  }
};

const store = createStore(combineReducers({ reducer, reducer2 }));

export default store;
