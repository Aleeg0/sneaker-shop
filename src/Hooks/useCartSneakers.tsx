import {useContext} from "react";
import {AppContext, IAppContext} from "./AppContext";

export const useCartSneakers = () => {
    const state = useContext<IAppContext|null>(AppContext);
    if (state) {
        const total = state.cartSneakers.reduce((sum,sneaker) => sneaker.price + sum, 0);
        return {
            total: total,
            cartSneakers: state.cartSneakers,
            setCartSneakers: state.setCartSneakers,
            onCartAction: state.onCartAction,
            isCartOpened: state.isCartOpened,
            setIsCartOpened: state.setIsCartOpened
        };
    }
    throw new Error("cartSneakerContext is undefined");

}