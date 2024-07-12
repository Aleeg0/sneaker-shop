import {useContext} from "react";
import {AppContext, IAppContext} from "./AppContext";

export const useLoading = () => {
  const state = useContext<IAppContext|null>(AppContext);

  if (state) {
    return {
      isLoading: state.isLoading
    };
  }
  throw new Error("appContext is undefined");
}