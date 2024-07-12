import React, {createContext} from "react";
import {Sneaker} from "../Models/Sneaker";

export interface IAppContext{
    sneakers: Sneaker[],
    setSneakers: (sneaker: React.SetStateAction<Sneaker[]>) => void,
    cartSneakers: Sneaker[],
    setCartSneakers: (sneaker: React.SetStateAction<Sneaker[]>) => void,
    isCartOpened: boolean,
    setIsCartOpened: (isOpened: boolean) => void,
    favoriteSneakers: Sneaker[],
    //setFavoriteSneakers: (sneaker: Sneaker) =>  React.Dispatch<React.SetStateAction<Sneaker[]>>,
    onCartAction: (sneaker: Sneaker) => void,
    onFavoriteAction: (sneaker: Sneaker) => void,
    isLoading: boolean
}

export const AppContext = createContext<IAppContext|null>(null);