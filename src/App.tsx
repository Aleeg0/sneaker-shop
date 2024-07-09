import React, {useEffect} from 'react';
import Header from "./Components/Header";
import SneakerCard from "./Components/SneakerCard";
import {ReactComponent as FindLogo} from "./assets/finder.svg";
import Sneaker, {isEqual} from "./Models/Sneaker";
import "./index.css"
import Cart from "./Components/Cart";
import axios from "axios";

function App() {
    // all sneakers stats
    const [sneakersList,setSneakersList] = React.useState<Sneaker[]>([]);
    const [cartSneakers,setCartSneakers] = React.useState<Sneaker[]>([]);
    const [favoriteSneakers,setFavoriteSneakers] = React.useState<Sneaker[]>([]);
    // for
    const [isCartOpen, setIsCartOpen] = React.useState<boolean>(false);
    const [searchValue,setSearchValue] = React.useState<string>("")

    useEffect(() => {
        axios.get("https://0f8af2c588831550.mokky.dev/sneakers")
            .then(res => {
                console.log(res.data);
                setSneakersList(res.data);
            })
            .catch(err => console.log(err))
        axios.get("https://0f8af2c588831550.mokky.dev/cart")
            .then(res => {
                console.log(res.data);
                setCartSneakers(res.data);
            })
    }, []);

    const onCartAction = async (sneaker: Sneaker, isAdded: boolean) => {
        // if we need to add
        if (isAdded){
            let findSneaker: Sneaker| undefined = cartSneakers.find(curSneaker => isEqual(curSneaker,sneaker))
            if (findSneaker) {
                await onRemoveFromCart(findSneaker);
            }
        }
        // if we need to remove
        else{
            try {
                await axios.post("https://0f8af2c588831550.mokky.dev/cart", sneaker);
                axios.get("https://0f8af2c588831550.mokky.dev/cart").then(res => {
                    setCartSneakers(c => c = res.data);
                });

            }
            catch (err) {
                console.log(`failed:, ${err}`);
            }
        }
    }

    const onRemoveFromCart = async (sneaker: Sneaker) => {
        try {
            await axios.delete(`https://0f8af2c588831550.mokky.dev/cart/${sneaker.id}`);
            setCartSneakers(c => c.filter(curSneaker => curSneaker.id !== sneaker.id));
        }
        catch(err) {
            console.log(`failed:, ${err}`);
        }
    }

    useEffect(() => {
        let searchParam = "";
        if (searchValue) {
            searchParam = `?name=*${searchValue}*`
        }
        axios.get(`https://0f8af2c588831550.mokky.dev/sneakers` + searchParam)
            .then(res => setSneakersList(c => res.data));
    }, [searchValue]);

    return (
        <div className="wrapper">
            <Cart
                isOpen={isCartOpen}
                onCloseCart={setIsCartOpen}
                sneakersList={cartSneakers}
                onCartRemove={onRemoveFromCart}
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

                    {sneakersList.map((sneaker) =>
                        <SneakerCard
                            {...sneaker}
                            isAdd={!!cartSneakers.find(s => isEqual(s,sneaker))}
                            onAction={onCartAction}
                        />
                    )}
                </div>
            </main>
        </div>
    )
        ;
}

export default App;
