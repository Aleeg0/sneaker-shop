import React from 'react';
import Header from "../../Components/Header";
import {Link} from "react-router-dom";
import styles from "../_pages.module.scss";
import { ReactComponent as GoBack} from "../../assets/goBack.svg";
import InfoCard from "../../Components/InfoCard";
import Order from "../../Components/Order"
import Cart from "../../Components/Cart";
import {useOrders} from "../../Hooks/usuOrders";
import {useLoading} from "../../Hooks/useLoading";


const Profile = () => {
  const {orders} = useOrders();
  const {isLoading} = useLoading();

  return (
    <>
      <Cart/>
      <Header curPage={3}/>
      <main>
        <div className={`${styles.contentInfo}`}>
          <Link to="/">
            <button><GoBack/></button>
          </Link>
          <h1>Orders</h1>
        </div>
        <div className={
            [
              styles.profile,
              styles.content,
              orders.length > 0 ? "" : styles.empty
            ].join(" ")
          }>
          {isLoading ?
            <>
            </>
            :
            orders.length > 0 ?
              orders.map((order,index) =>
                <Order key={index} {...order}/>
              )
              :
              <InfoCard
                title={"You don't have any orders"}
                description={"Are you a beggar? \nPlace at least one order."}
                imgName={"noOrder.svg"}
                altText={"cryImg"}
                to={"/"}
              />
          }
        </div>
      </main>
    </>
  );
};

export default Profile;