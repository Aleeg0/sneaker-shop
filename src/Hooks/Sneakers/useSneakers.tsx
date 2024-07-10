import {useContext} from "react";
import {AppContext, IAppContext} from "../AppContext";

export const useSneakers = () => {
    const state = useContext<IAppContext|null>(AppContext);

    if (state) {
        return {sneakers: state.sneakers};
    }
    throw new Error("sneakerContext is undefined");
}