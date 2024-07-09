import React, {FC} from 'react';
import {ReactComponent as RemoveBtn} from "../../assets/cartRemoveBtn.svg";
import Sneaker from "../../Models/Sneaker";

interface CartItemProps {
    id: number,
    name: string,
    price: number,
    imgURL: string,
    onRemove: (sneaker: Sneaker) => void,
}

const CartItem: FC<CartItemProps> = ({id,name,price,imgURL, onRemove}) => {
    return (
        <div className="cartItem">
            <img src={imgURL} alt="cart Item"/>
            <div className="cartItemInfo">
                <h3>{name}</h3>
                <b>{price} USD</b>
            </div>
            <button
                type="button"
                onClick={() => onRemove({id,name,price,imgURL})}
            >
                <RemoveBtn/>
            </button>
        </div>
    );
};

export default CartItem;