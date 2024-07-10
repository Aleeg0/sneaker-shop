import React from 'react';
import CartItem from "../CartItem";
import {ReactComponent as OrderArrow} from "../../assets/orderArrow.svg";
import {useNavigate} from "react-router-dom";
import {useCartSneakers} from "../../Hooks/Cart/useCartSneakers";

const Cart = () => {
  const navigate = useNavigate();
  const {cartSneakers, onCartAction, setIsCartOpened, isCartOpened,total} = useCartSneakers();

  const onCloseCart = () => {
    setIsCartOpened(false);
    navigate(-1);
  }

  return (
    <div className={`overlay ${isCartOpened ? 'open' : ''}`}>
      <div
        className="empty"
        onClick={onCloseCart}
      />
      <div className={`cartBar ${isCartOpened ? 'open' : ''}`}>
        <h2>Cart</h2>
        <div className="cartItems">
          {cartSneakers.map((sneaker, index) =>
            <CartItem
              key={index}
              sneaker={sneaker}
              onRemove={onCartAction}
            />
          )}
        </div>
        <div>
          <ul>
            <li>
              <span>Total:</span>
              <hr/>
              <b>{total} USD</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <hr/>
              <b>{total * 0.05} USD</b>
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