import { createStore } from "redux";
const initialState = [
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
];

const reducer = (state, action) => {
  // eslint-disable-next-line no-debugger

  switch (action.type) {
    case "GET_DATA":
      return { startValue: state.startValue + 1 };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
