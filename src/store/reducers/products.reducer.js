import { products } from "../../data/products";

const initialState = {
  products,
  filteredProducts: [],
  selected: null,
};

const productsReducer = (state = initialState, action) => {
  return state;
};

export default productsReducer;
