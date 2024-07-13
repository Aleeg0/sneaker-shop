import {useContext} from "react";
import {AppContext} from "./AppContext";

export const useOrders = () => {
  const state = useContext(AppContext);
  if (state) {
    return {orders: state.orders};
  }
  throw new Error('appContext is undefined');
}