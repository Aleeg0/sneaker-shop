import React, {useEffect} from 'react';
import "./index.css"
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorite";
import Profile from "./Pages/Profile";
import {Sneaker} from "./Models/Sneaker";
import {AppContext} from "./Hooks/AppContext";

function App() {
  // all sneakers stats
  const [sneakers,setSneakers] = React.useState<Sneaker[]>([]);
  const [cartSneakers,setCartSneakers] = React.useState<Sneaker[]>([]);
  const [favoriteSneakers,setFavoriteSneakers] = React.useState<Sneaker[]>([]);
  const [isCartOpened, setIsCartOpened] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchingData () {
      try {
        const sneakers = await axios.get("https://0f8af2c588831550.mokky.dev/sneakers");
        const cartSneakers = await axios.get("https://0f8af2c588831550.mokky.dev/cart");
        const favoriteSneakers = await axios.get("https://0f8af2c588831550.mokky.dev/favorites");

        console.log(sneakers.data);
        console.log(cartSneakers.data);
        console.log(favoriteSneakers.data);

        setSneakers(sneakers.data);
        setCartSneakers(cartSneakers.data);
        setFavoriteSneakers(favoriteSneakers.data);
      } catch (err){
        alert("Error getting data...");
        console.error(err);
      }
    }
    fetchingData().finally(() => setIsLoading(false));
  }, []);

  const onCartAction = async (sneaker: Sneaker) => {
    try {
      // if we need to remove
      if (cartSneakers.some(curSneaker => curSneaker.sneakerId === sneaker.sneakerId)) {
        setCartSneakers(c => c.filter(curSneaker => curSneaker.sneakerId !== sneaker.sneakerId));
        await axios.delete("https://0f8af2c588831550.mokky.dev/cart/"
          + cartSneakers.find(curSneaker => curSneaker.sneakerId === sneaker.sneakerId)!.id
        );
      }
      // if we need to add
      else {
        const {data} = await axios.post("https://0f8af2c588831550.mokky.dev/cart", sneaker);
        setCartSneakers(c => [...c,data]);
      }
    }
    catch (err) {
      alert("onCartAction request failed");
      console.error(`failed:, ${err}`);
    }
  }

  const onFavoriteAction = async (sneaker: Sneaker) => {
    try {
      // if we need to remove
      if (favoriteSneakers.some(curSneaker => curSneaker.sneakerId === sneaker.sneakerId)) {
        setFavoriteSneakers(c => c.filter(curSneaker => curSneaker.sneakerId !== sneaker.sneakerId));
        await axios.delete("https://0f8af2c588831550.mokky.dev/favorites/" +
                    favoriteSneakers.find(curSneaker => curSneaker.sneakerId === sneaker.sneakerId)!.id
        );
      }
      // if we need to add
      else {
        const {data} = await axios.post("https://0f8af2c588831550.mokky.dev/favorites", sneaker);
        setFavoriteSneakers(c => [...c, data]);
      }
    }
    catch (err) {
      alert("onFavoriteAction request failed");
      console.error(`failed:, ${err}`);
    }
  }

  return (
    <AppContext.Provider value={{
      sneakers,
      setSneakers,
      cartSneakers,
      setCartSneakers,
      favoriteSneakers,
      onCartAction,
      onFavoriteAction,
      isCartOpened,
      setIsCartOpened,
      isLoading
    }}>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="favorites" element={<Favorite/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
