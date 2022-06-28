import { categories } from "../../data/categories";

const initialState = {
  categories,
  selected: null,
};

const categoryReducer = (state = initialState, action) => {
  return state;
};

export default categoryReducer;
