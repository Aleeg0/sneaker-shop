import React, {FC} from 'react';
import {ReactComponent as RemoveBtn} from "../../assets/cartRemoveBtn.svg";

interface CartItemProps {
    id: number,
    name: string,
    price: number,
    imgURL: string
}

const CartItem: FC<CartItemProps> = ({name,price,imgURL}) => {
    return (
        <div className="cartItem">
            <img src={imgURL} alt="cart Item"/>
            <div className="cartItemInfo">
                <h3>{name}</h3>
                <b>{price} USD</b>
            </div>
            <button
                type="button"
            >
                <RemoveBtn/>
            </button>
        </div>
    );
};

export default CartItem;