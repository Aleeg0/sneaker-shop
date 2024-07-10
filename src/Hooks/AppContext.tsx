import {createContext} from "react";
import Sneaker from "../Models/Sneaker";

export interface IAppContext{
    sneakers: Sneaker[],
    //setSneakers: (sneaker: Sneaker) =>  React.Dispatch<React.SetStateAction<Sneaker[]>>,
    cartSneakers: Sneaker[],
    //setCartSneakers: (sneaker: Sneaker) =>  React.Dispatch<React.SetStateAction<Sneaker[]>>,
    favoriteSneakers: Sneaker[],
    //setFavoriteSneakers: (sneaker: Sneaker) =>  React.Dispatch<React.SetStateAction<Sneaker[]>>,
    onCartAction: (sneaker: Sneaker) => void,
    onFavoriteAction: (sneaker: Sneaker) => void,
}

export const AppContext = createContext<IAppContext|null>(null);