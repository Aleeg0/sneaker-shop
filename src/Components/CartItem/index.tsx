import React from 'react';
import img1 from "../../assets/images/image1.jpg"
import {ReactComponent as RemoveBtn} from "../../assets/cartRemoveBtn.svg";

const CartItem = () => {
    return (
        <div className="cartItem">
            <img src={img1} alt="cart Item"/>
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