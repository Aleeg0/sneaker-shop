import React, {useEffect} from 'react';
import Header from "../../Components/Header";
import {Link, useNavigate} from "react-router-dom";
import styles from "../_pages.module.scss";
import { ReactComponent as GoBack} from "../../assets/goBack.svg";
import InfoCard from "../../Components/InfoCard";
import {IOrder} from "../../Models/IOrder";
import Order from "../../Components/Order"
import axios from "axios";
import Cart from "../../Components/Cart";


const Profile = () => {
  const [orders, setOrders] = React.useState<IOrder[]>([]);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const {data} = await axios.get("https://0f8af2c588831550.mokky.dev/orders");
        setOrders(data);
        console.log("fetched")
      } catch (err) {
        alert("Could not get orders");
        console.log(err);
      }
    }
    fetchingData();
  }, []);

  console.log("render");
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
        <div className={`${styles.profile} ${styles.content}`}>
          {orders.length > 0 ?
            orders.map((order,index) =>
              <Order key={index} {...order}/>
            )
            :
            <InfoCard
              title={"No favorites :("}
              description={"You didn't add anything to your favorites"}
              imgName={"noFavorite.svg"}
              altText={"sedImg"}
              to={""}
            />
          }
        </div>
      </main>
    </>
  );
};

export default Profile;