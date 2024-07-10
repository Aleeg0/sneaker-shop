import {useContext} from "react";
import {AppContext, IAppContext} from "../AppContext";

export const useCartSneakers = () => {
    const state = useContext<IAppContext|null>(AppContext);
    if (state) {
        const total = state.cartSneakers.reduce((sum,sneaker) => sneaker.price + sum, 0);
        return {cartSneakers: state.cartSneakers, total: total, onCartAction: state.onCartAction};
    }
    throw new Error("cartSneakerContext is undefined");

}