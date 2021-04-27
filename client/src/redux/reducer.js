import { GET_COUNTRIES, GET_DETAILS } from "./costantes";

let initialState = {};
export default function datos(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
}
