// import { createStore, combineReducers } from "redux";
import { createStore, compose } from "redux";

const initialState = {
  beerData: [
    {
      id: "name",
      numeric: false,
      label: "Назва рецепту",
    },
    {
      id: "type",
      numeric: true,
      label: "Тип пива",
    },
    {
      id: "alcohol",
      numeric: true,
      label: "Вміст алкоголю",
    },
    {
      id: "bittenesrs ",
      numeric: true,
      label: "Гіркота",
    },
    {
      id: "capacity",
      numeric: true,
      label: "Вихідний об'єм",
    },
  ],
  loading: false,
};

const reducerData = (state, action) => {
  switch (action.type) {
    case "REQUESTING_DATA":
      return {
        ...state,
        beerData: [],
        loading: true,
      };
    case "DATA":
      return {
        ...state,
        beerData: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
const store = createStore(
  reducerData,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

// const store = createStore(combineReducers({ reducerLoading, reducerData }));

export default store;
