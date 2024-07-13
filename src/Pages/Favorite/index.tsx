import React from 'react';
import Header from "../../Components/Header";
import {useCartSneakers} from "../../Hooks/Cart/useCartSneakers";
import {Link} from "react-router-dom";
import {ReactComponent as GoBack} from "../../assets/goBack.svg";
import SneakerCard from "../../Components/SneakerCard";
import {useFavoriteSneakers} from "../../Hooks/Favorite/useFavoriteSneakers";
import InfoCard from "../../Components/InfoCard";
import styles from "../_pages.module.scss"
import {useLoading} from "../../Hooks/useLoading";
import Cart from "../../Components/Cart";

const Favorite = () => {
  const {cartSneakers, onCartAction} = useCartSneakers();
  const {favoriteSneakers,onFavoriteAction} = useFavoriteSneakers();
  const {isLoading} = useLoading();
  return (
    <>
      <Cart/>
      <Header curPage={2}/>
      <main>
        <div className={styles.contentInfo}>
          <Link to="/">
            <button><GoBack/></button>
          </Link>
          <h1>Favorite</h1>
        </div>
        <div className={`${styles.content} ${favoriteSneakers.length > 0 ? "" : styles.empty}`}>
          {favoriteSneakers.length > 0 ?
            favoriteSneakers.map((sneaker, index) =>
              <SneakerCard
                key={index}
                sneaker={sneaker}
                isAdded={cartSneakers.some(s => s.sneakerId === sneaker.sneakerId)}
                isFavorite={favoriteSneakers.some(s => s.sneakerId === sneaker.sneakerId)}
                onCartAction={onCartAction}
                onFavoriteAction={onFavoriteAction}
                isLoading={isLoading}
              />)
            :
              <InfoCard
                title={"No favorites :("}
                description={"You didn't add anything to your favorites"}
                imgName={"noFavorite.svg"}
                altText={"sedImg"}
                to={"/"}
              />
          }
        </div>
      </main>
    </>
  );
};

export default Favorite;