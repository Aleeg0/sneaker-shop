import React, {FC} from 'react';
import {ISneaker} from "../../Models/ISneaker";
import SneakerCard from "../SneakerCard";
import styles from "./_order.module.scss"

interface OrderProps {
  id: number,
  items: ISneaker[]
}

const Order: FC<OrderProps> = ({id,items}) => {
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