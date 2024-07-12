import React, {FC} from 'react';
import {Sneaker} from "../../Models/Sneaker";
import SneakerCard from "../SneakerCard";
import styles from "./_order.module.scss"

interface OrderProps {
  id: number,
  items: Sneaker[]
}

const Order: FC<OrderProps> = ({id,items}) => {
  const s: Sneaker = {
    id: 1,
    sneakerId: 1,
    price: 100,
    name: 'Мужские Кроссовки Under Armour Curry 8',
    imgURL: "./sneakers/sneaker-1.png"
  }
  
  return (
    <div className={styles.order}>
      <h2>Order №{id}</h2>
      <div className={`${styles.sneakers} ${styles.empty}`}>
        {items.map((sneaker, index) =>
          <SneakerCard
            key={index}
            sneaker={sneaker}
          />
        )}
      </div>
    </div>
  );
};

export default Order;