import React, {useEffect} from 'react';
import Header from "../Components/Header";
import SneakerCard from "../Components/SneakerCard";
import {ReactComponent as FindLogo} from "../assets/finder.svg";
import axios from "axios";
import {useSneakers} from "../Hooks/Sneakers/useSneakers";
import {useCartSneakers} from "../Hooks/Cart/useCartSneakers";
import {useFavoriteSneakers} from "../Hooks/Favorite/useFavoriteSneakers";
import Cart from "../Components/Cart";

const Home = () => {
    const {sneakers} = useSneakers();
    const {cartSneakers,onCartAction} = useCartSneakers();
    const {favoriteSneakers,onFavoriteAction} = useFavoriteSneakers();

    const [isCartOpen, setIsCartOpen] = React.useState<boolean>(false);
    const [searchValue,setSearchValue] = React.useState<string>("")

    /*
    useEffect(() => {
        let searchParam = "";
        if (searchValue) {
            searchParam = `?name=*${searchValue}*`
        }
        axios.get(`https://0f8af2c588831550.mokky.dev/sneakers` + searchParam)
            .then(res => setSneakers(c => res.data));
    }, [searchValue]);
     */

    return (
        <>
            <Cart
                isOpen={isCartOpen}
                onCloseCart={setIsCartOpen}
                sneakersList={cartSneakers}
                onCartRemove={onCartAction}
            />
            <Header onClickCart={setIsCartOpen}/>
            <main>
                <div className="contentInfo">
                    <h1>ALL Sneakers</h1>
                    <div className="searcher">
                        <FindLogo/>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchValue}
                            onChange={(event) => setSearchValue(event.target.value)}
                        />
                    </div>
                </div>
                <div className="content">
                    {sneakers.map((sneaker,index) =>
                        <SneakerCard
                            key={index}
                            sneaker={sneaker}
                            isAdded={cartSneakers.some(s => s.sneakerId === sneaker.sneakerId)}
                            isFavorite={favoriteSneakers.some(s => s.sneakerId === sneaker.sneakerId)}
                            onCartAction={onCartAction}
                            onFavoriteAction={onFavoriteAction}
                        />
                    )}
                </div>
            </main>
        </>
    );
};

export default Home;