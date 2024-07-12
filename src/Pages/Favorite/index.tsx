import React from 'react';
import Header from "../../Components/Header";
import {useCartSneakers} from "../../Hooks/Cart/useCartSneakers";
import {Outlet, useNavigate} from "react-router-dom";
import {ReactComponent as GoBack} from "../../assets/goBack.svg";
import SneakerCard from "../../Components/SneakerCard";
import {useFavoriteSneakers} from "../../Hooks/Favorite/useFavoriteSneakers";
import InfoCard from "../../Components/InfoCard";
import styles from "../_pages.module.scss"
import {useLoading} from "../../Hooks/useLoading";

const Favorite = () => {
  const {cartSneakers, onCartAction} = useCartSneakers();
  const {favoriteSneakers,onFavoriteAction} = useFavoriteSneakers();
  const {isLoading} = useLoading();
  const navigate = useNavigate();

  const onCloseFavorite = () => {
    navigate(-1);
  }

    return (
      <>
        <Outlet/>
        <Header/>
        <main>
          <div className={styles.contentInfo}>
            <button onClick={() => navigate(-1)}>
              <GoBack/>
            </button>
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
                  onButtonClick={onCloseFavorite}
                />
            }
          </div>
        </main>
      </>
    );
};

export default Favorite;