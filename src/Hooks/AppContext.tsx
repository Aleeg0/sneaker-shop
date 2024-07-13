import React, {createContext} from "react";
import {ISneaker} from "../Models/ISneaker";

export interface IAppContext{
    sneakers: ISneaker[],
    setSneakers: (sneaker: React.SetStateAction<ISneaker[]>) => void,
    cartSneakers: ISneaker[],
    setCartSneakers: (sneaker: React.SetStateAction<ISneaker[]>) => void,
    isCartOpened: boolean,
    setIsCartOpened: (isOpened: boolean) => void,
    favoriteSneakers: ISneaker[],
    //setFavoriteSneakers: (sneaker: ISneaker) =>  React.Dispatch<React.SetStateAction<ISneaker[]>>,
    onCartAction: (sneaker: ISneaker) => void,
    onFavoriteAction: (sneaker: ISneaker) => void,
    isLoading: boolean
}

export const AppContext = createContext<IAppContext|null>(null);