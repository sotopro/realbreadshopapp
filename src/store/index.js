import { createStore, combineReducers, applyMiddleware } from "redux";
import categoryReducer from "./reducers/category.reducer";
import productReducer from "./reducers/products.reducer";
import cartReducer from "./reducers/cart.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  cart: cartReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
