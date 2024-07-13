import React, {createContext} from "react";
import {ISneaker} from "../Models/ISneaker";
import {IOrder} from "../Models/IOrder";

export interface IAppContext{
    // all sneakers
    sneakers: ISneaker[],
    setSneakers: (sneaker: React.SetStateAction<ISneaker[]>) => void,
    // cart sneakers
    cartSneakers: ISneaker[],
    setCartSneakers: (sneaker: React.SetStateAction<ISneaker[]>) => void,
    onCartAction: (sneaker: ISneaker) => void,
    isCartOpened: boolean,
    setIsCartOpened: (isOpened: boolean) => void,
    // favorite sneakers
    favoriteSneakers: ISneaker[],
    onFavoriteAction: (sneaker: ISneaker) => void,
    // orders
    orders: IOrder[],
    // isLoading data
    isLoading: boolean
}

export const AppContext = createContext<IAppContext|null>(null);