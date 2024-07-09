import React from 'react';
import CartItem from "../CartItem";
import {ReactComponent as OrderArrow} from "../../assets/orderArrow.svg";

const Cart = () => {
    return (
        <div className="overlay">
            <div className="cartBar">
                <h2>Cart</h2>
                <div className="cartItems">
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>
                <div>
                    <ul>
                        <li>
                            <span>Total:</span>
                            <hr/>
                            <b>500 USD</b>
                        </li>
                        <li>
                            <span>Tax 5%:</span>
                            <hr/>
                            <b>5 USD</b>
                        </li>
                    </ul>
                    <button
                        type="button"
                        className={`orderBtn`}
                    >Place an order <OrderArrow/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;