import React from 'react';
import {ReactComponent as RemoveBtn} from "../../assets/cartRemoveBtn.svg";

const CartItem = () => {
    return (
        <div className="cartItem">
            <img src={""} alt="cart Item"/>
            <div className="cartItemInfo">
                <h3>Мужские Кроссовки Nike Air Max 270</h3>
                <b>100 USD</b>
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