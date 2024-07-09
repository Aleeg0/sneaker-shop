import React, {useEffect} from 'react';
import Header from "./Components/Header";
import SneakerCard from "./Components/SneakerCard";
import {ReactComponent as FindLogo} from "./assets/finder.svg";
import Sneaker from "./Models/Sneaker";
import "./index.css"
import Cart from "./Components/Cart";
import axios from "axios";

function App() {
    const [sneakersList,setSneakersList] = React.useState<Sneaker[]>([]);
    const [isCartOpen, setIsCartOpen] = React.useState<boolean>(false);

    useEffect(() => {
        axios.get("https://0f8af2c588831550.mokky.dev/sneakers")
            .then(res => {
                console.log(res.data);
                setSneakersList(res.data);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="wrapper">
            <Cart
                isOpen={isCartOpen}
                onCloseCart={setIsCartOpen}
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
                            key={sneaker.id}
                            name={sneaker.name}
                            price={sneaker.price}
                            imgURL={sneaker.imgURL}
                        />
                    )}
                </div>
            </main>
        </div>
    )
        ;
}

export default App;
