import React, {useEffect} from 'react';
import Header from "../../Components/Header";
import SneakerCard from "../../Components/SneakerCard";
import {ReactComponent as FindLogo} from "../../assets/finder.svg";
import axios from "axios";
import {useSneakers} from "../../Hooks/Sneakers/useSneakers";
import {useCartSneakers} from "../../Hooks/Cart/useCartSneakers";
import {useFavoriteSneakers} from "../../Hooks/Favorite/useFavoriteSneakers";
import styles from "../_pages.module.scss"
import {useLoading} from "../../Hooks/useLoading";
import Cart from "../../Components/Cart";
import {useAutoAnimate} from "@formkit/auto-animate/react";

const Home = () => {
  const {sneakers, setSneakers} = useSneakers();
  const {cartSneakers,onCartAction} = useCartSneakers();
  const {favoriteSneakers,onFavoriteAction} = useFavoriteSneakers();
  const {isLoading} = useLoading();
  const [searchValue,setSearchValue] = React.useState<string>("")
  const [sneakerRef] = useAutoAnimate({duration: 400, easing: "linear"});


  useEffect(() => {
    async function Search() {
      let searchParam = "";
      if (searchValue) {
        searchParam = `?name=*${searchValue}*`
      }
      try {
        const sneakers = await axios.get(`https://0f8af2c588831550.mokky.dev/sneakers` + searchParam)
        setSneakers(sneakers.data);
      }
      catch (err) {
        alert(err);
        console.log("backend filtration err:  ", err);
      }
    }
    Search();
  }, [searchValue]);

  return (
    <>
      <Cart/>
      <Header/>
      <main>
        <div className={`${styles.home} ${styles.contentInfo}`}>
          <h1>ALL Sneakers</h1>
          <div className={styles.searcher}>
            <FindLogo/>
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </div>
        </div>
        <div className={styles.content} ref={sneakerRef}>
          {sneakers.map((sneaker,index) =>
            <SneakerCard
              key={index}
              sneaker={sneaker}
              isLoading={isLoading}
              isAdded={cartSneakers.some(s => s.sneakerId === sneaker.sneakerId)}
              isFavorite={favoriteSneakers.some(s => s.sneakerId === sneaker.sneakerId)}
              onCartAction={onCartAction}
              onFavoriteAction={onFavoriteAction}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default Home;