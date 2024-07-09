import React, {useEffect} from 'react';
import Header from "./Components/Header";
import SneakerCard from "./Components/SneakerCard";
import {ReactComponent as FindLogo} from "./assets/finder.svg";
import Sneaker from "./Models/Sneaker";
import "./index.css"
import Cart from "./Components/Cart";
import axios from "axios";
import cart from "./Components/Cart";

function App() {
    // all sneakers stats
    const [sneakersList,setSneakersList] = React.useState<Sneaker[]>([]);
    const [cartSneakers,setCartSneakers] = React.useState<Sneaker[]>([]);
    const [favoriteSneakers,setFavoriteSneakers] = React.useState<Sneaker[]>([]);
    // for
    const [isCartOpen, setIsCartOpen] = React.useState<boolean>(false);

    useEffect(() => {
        axios.get("https://0f8af2c588831550.mokky.dev/sneakers")
            .then(res => {
                console.log(res.data);
                setSneakersList(res.data);
            })
            .catch(err => console.log(err))
    }, []);

    const onCartAction = (sneaker: Sneaker) => {
        // if we need to remove
        console.log(sneaker);
        if (cartSneakers.find(curSneaker =>
            curSneaker.id === sneaker.id && curSneaker.name === sneaker.name && curSneaker.price === sneaker.price
        )) {
            // TODO backed request
            setCartSneakers(c => c.filter(curSneaker => curSneaker.id !== sneaker.id))
        }// if we need to add
        else{
            // TODO backed request
            setCartSneakers(c => [...c, sneaker]);
        }
    }

    return (
        <div className="wrapper">
            <Cart
                isOpen={isCartOpen}
                onCloseCart={setIsCartOpen}
                sneakersList={cartSneakers}
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
                        />
                    </div>
                </div>
                <div className="content">
                    {sneakersList.map((sneaker) =>
                        <SneakerCard
                            {...sneaker}
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
