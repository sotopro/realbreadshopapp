import { orderTypes } from "../types/order.types";

const { GET_ORDERS, DELETE_ORDER } = orderTypes;

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
      case DELETE_ORDER:
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.orderId),
        }
    default:
      return state;
  }
};

export default orderReducer;
