import { createStore, combineReducers } from "redux";
import categoryReducer from "./reducers/category.reducer";
import productReducer from "./reducers/products.reducer";

const RootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
});

export default createStore(RootReducer);
