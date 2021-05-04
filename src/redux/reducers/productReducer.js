import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  products: [],

  counter: 0,
};

export const productReducer = (state = initialState, { type, payload }) => {
  //ismay second parameter action hota hai.idhr type aur payload ko de structure kya h jo product actions se arha h
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };

    default:
      return state;
  }
};
