import React, {FC} from 'react';
import {ReactComponent as RemoveBtn} from "../../assets/cartRemoveBtn.svg";
import {ISneaker} from "../../Models/ISneaker";
import styles from "./_cartItem.module.scss"

interface CartItemProps {
    sneaker: ISneaker,
    onRemove: (sneaker: ISneaker) => void,
}

const CartItem: FC<CartItemProps> = ({sneaker, onRemove}) => {
    return (
        <div className={styles.cartItem}>
            <img src={`${process.env.PUBLIC_URL}/${sneaker.imgURL}`} alt="cart Item"/>
            <div>
                <h3>{sneaker.name}</h3>
                <b>{sneaker.price} USD</b>
            </div>
            <button
                type="button"
                onClick={() => onRemove(sneaker)}
            >
                <RemoveBtn/>
            </button>
        </div>
    );
};

export default CartItem;