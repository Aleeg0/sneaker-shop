import React from 'react';
import Header from "../Components/Header";
import {useCartSneakers} from "../Hooks/Cart/useCartSneakers";

const Favorite = () => {
    const {onCartAction} = useCartSneakers()
    return (
        <>
            <Header/>
        </>
    );
};

export default Favorite;