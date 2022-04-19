/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
const initialState = {
  beerData: [],
  // loading: false,
};

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_DATA": {
      return {
        ...state,
        beerData: action.payload,
      };
    }
    default:
      return state;
  }
}












// export default function reducer(state = InitialState, action) {
//   switch (action.type) {
//     case REQUEST_DATA: {
//       return { ...state, loading: true };
//     }
//     case REQUEST_DATA_SUCCESS: {
//       return { ...state, loading: false, contactData: action.payload };
//     }
//     case REQUEST_DATA_FAILURE: {
//       return { ...state, loading: false, contactData: action.payload };
//     }
//     // default
//   }
//   return state;
// }
