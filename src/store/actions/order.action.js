import { orderTypes } from "../types/order.types";
import { URL_API } from "../../constants/database/firebase";

const { GET_ORDERS, DELETE_ORDER } = orderTypes;

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const reponse = await fetch(`${URL_API}orders.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await reponse.json();
      const orders = Object.keys(data).map((key) => {
        return {
          ...data[key],
          id: key,
        };
      });

      dispatch({
        type: GET_ORDERS,
        payload: orders,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const deleteOrder = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`${URL_API}orders/${id}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch({
        type: DELETE_ORDER,
        orderId: id,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}