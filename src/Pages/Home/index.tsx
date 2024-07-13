import React, {useEffect, useRef} from 'react';
import Header from "../../Components/Header";
import SneakerCard from "../../Components/SneakerCard";
import {ReactComponent as FindLogo} from "../../assets/finder.svg";
import axios from "axios";
import {useSneakers} from "../../Hooks/useSneakers";
import {useCartSneakers} from "../../Hooks/useCartSneakers";
import {useFavoriteSneakers} from "../../Hooks/useFavoriteSneakers";
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
  const [filterValue,setFilterValue] = React.useState<string>("title")
  const [sneakerRef] = useAutoAnimate({duration: 400});

  useEffect(() => {
    async function Search() {
      const fetchURL = new URL("https://0f8af2c588831550.mokky.dev/sneakers");
      if (searchValue) {
        fetchURL.searchParams.append("name", `*${searchValue}*`);
      }
      fetchURL.searchParams.append("sortBy", filterValue);
      try {
        const sneakers = await axios.get(fetchURL.toString())
        setSneakers(sneakers.data);
      }
      catch (err) {
        alert(err);
        console.log("backend filtration err:  ", err);
      }
    }
    Search();
  }, [searchValue,filterValue]);



  return (
    <>
      <Cart/>
      <Header/>
      <main>
        <div className={`${styles.home} ${styles.contentInfo}`}>
          <h1>ALL Sneakers</h1>
          <div className={styles.infoTools}>
            <select onChange={(event) => {
              console.log(event.target.value)
              setFilterValue(event.target.value);
            }}>
              <option value={"title"}>By name</option>
              <option value={"price"}>By price (cheap)</option>
              <option value={"-price"}>By price (expensive)</option>
            </select>
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