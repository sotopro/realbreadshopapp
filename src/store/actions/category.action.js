import { categoryTypes } from "../types/category.types";

const { SELECT_CATEGORY } = categoryTypes;

export const selectCategory = (id) => ({
  type: SELECT_CATEGORY,
  categoryId: id,
});
