export const increment = (value) => {
  return {
    type: "INCREMENT",
    payload: value,
  };
};

export const decrement = (value) => {
  return {
    type: "DECREMENT",
    payload: value,
  };
};
export const increment2 = (value) => {
  return {
    type: "INCREMENTS",
    payload: value,
  };
};

export const decrement2 = (value) => {
  return {
    type: "DECREMENTS",
    payload: value,
  };
};
