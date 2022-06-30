import { orderTypes } from "../types/order.types";

const { GET_ORDERS } = orderTypes;

const initialState = {
  items: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
