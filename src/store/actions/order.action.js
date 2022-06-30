import { orderTypes } from "../types/order.types";
import { URL_API } from "../../constants/database/firebase";

const { GET_ORDERS } = orderTypes;

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
