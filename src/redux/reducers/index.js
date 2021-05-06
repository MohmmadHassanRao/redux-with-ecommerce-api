import { combineReducers } from "redux";
import {
  counterReducer,
  productReducer,
  selectedProductReducer,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  counters: counterReducer,
});

export default reducers;
