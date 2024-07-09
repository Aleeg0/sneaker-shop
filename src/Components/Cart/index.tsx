import React, {FC} from 'react';
import CartItem from "../CartItem";
import {ReactComponent as OrderArrow} from "../../assets/orderArrow.svg";
import Sneaker from "../../Models/Sneaker";

interface CartProps {
    isOpen : boolean,
    onCloseCart: (isOpen:boolean) => void,
    sneakersList: Sneaker[]
}

const Cart: FC<CartProps> = ({onCloseCart,isOpen, sneakersList}) => {
    return (
        <div className={`overlay ${isOpen ? 'open' : ''}`}>
            <div
                className="empty"
                onClick={() => onCloseCart(false)}
            />
            <div className={`cartBar ${isOpen ? 'open' : ''}`}>
                <h2>Cart</h2>
                <div className="cartItems">
                    {sneakersList.map((sneaker, index) => {
                        return <CartItem
                            key={index}
                            {...sneaker}
                        />
                    })}
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