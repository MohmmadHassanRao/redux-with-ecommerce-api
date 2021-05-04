import { combineReducers } from "redux";
import { counterReducer, productReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  counters: counterReducer,
});

export default reducers;
