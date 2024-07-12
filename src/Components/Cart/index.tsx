import React, {useState} from 'react';
import CartItem from "../CartItem";
import {ReactComponent as OrderArrow} from "../../assets/orderArrow.svg";
import {useNavigate} from "react-router-dom";
import {useCartSneakers} from "../../Hooks/Cart/useCartSneakers";
import InfoCard from "../InfoCard";
import styles from "./_cart.module.scss"
import axios from "axios";

const Cart = () => {
  const navigate = useNavigate();
  const {cartSneakers,setCartSneakers, onCartAction, setIsCartOpened, isCartOpened,total} = useCartSneakers();
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState<number|null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onCloseCart = () => {
    setIsCartOpened(false);
    navigate(-1);
  }

  const onClickOrder = async () => {
    setIsLoading(true);
    try {
      // post order
      const {data} = await axios.post("https://0f8af2c588831550.mokky.dev/orders", {
        items: cartSneakers
      })
      // make UI changes
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartSneakers([]);
      // delete cart items from backend
      for (let i = 0; i < cartSneakers.length; i++) {
        await axios.delete(`https://0f8af2c588831550.mokky.dev/cart/${cartSneakers[i].id}`);
      }
    } catch (err) {
      alert("");
      console.error(err);
    }
    setIsLoading(false);
  }


  return (
    <div className={`${styles.overlay} ${isCartOpened ? styles.open : ''}`}>
      <div
        className={styles.empty}
        onClick={onCloseCart}
      />
      <div className={
        [
          styles.cartBar,
          isCartOpened ? styles.open : "" ,
        ].join(" ")
      }>
        <h2>Cart</h2>
        {cartSneakers.length > 0 ?
          <>
            <div className={styles.cartItems}>
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
                <b>{(total * 0.05).toFixed(2)} USD</b>
              </li>
            </ul>
            <button
              type="button"
              disabled={isLoading}
              className={styles.orderBtn}
              onClick={onClickOrder}
            >Place an order <OrderArrow/>
            </button>
          </div>
          </>
          :
          <div className={cartSneakers.length > 0 ? "": styles.emptyCart}>
            {isOrderComplete ?
              <InfoCard
                title={"The order has been placed!"}
                description={`Your order №${orderId} will be delivered by courier soon`}
                imgName={"orderSuccessful.svg"}
                altText={"order Successful Img"}
                onButtonClick={onCloseCart}
              />
              :
              <InfoCard
                title={"Cart is Empty"}
                description={"Add at least one pair of sneakers to place an order."}
                imgName={"cartEmpty.svg"}
                altText={"cartEmptyImg"}
                onButtonClick={onCloseCart}
              />}
          </div>
        }
      </div>
    </div>
  );
};

export default Cart;