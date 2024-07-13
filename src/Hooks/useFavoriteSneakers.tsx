import {useContext} from "react";
import {AppContext, IAppContext} from "./AppContext";


export const useFavoriteSneakers = () => {
    const state = useContext<IAppContext|null>(AppContext);
    if (state) {
        return {favoriteSneakers: state.favoriteSneakers,
          onFavoriteAction: state.onFavoriteAction
        };
    }
    throw new Error("useFavoriteSneakers is undefined");

}