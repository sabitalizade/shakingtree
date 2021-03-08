import { api } from "../api";

const INITIAL_STATE = {
  apple: api,
  basket: [],
};
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_DROP":
      return {
        ...state,
        apple: state.apple.map((item) =>
          item.id === action.payload ? { ...item, drop: true } : item
        ),
      };
    case "ADD_BASKET":
      return {
        ...state,
        basket:[...state.basket, state.apple.find((item) =>
          item.id === action.payload ? [...state.basket, item] : null
        )]
      };
      case "FILTER_APPLE":
          return {
              ...state,
              apple: state.apple.filter((item) =>
              item.id !== action.payload 
            )
          };
    default:
      return state;
  }
 };
