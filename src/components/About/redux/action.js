export const requestBeerData = () => {
  return {
    type: "REQUESTING_DATA",
  };
};

export const showData = (payload) => {
  return {
    type: "DATA",
    payload,
  };
};
