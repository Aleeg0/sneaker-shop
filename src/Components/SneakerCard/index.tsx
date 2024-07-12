import React, {FC} from 'react';
import {ReactComponent as FavoriteBtn} from "../../assets/favoriteBtn.svg"
import {ReactComponent as CartAddBtn} from "../../assets/mainAddBtn.svg";
import {ReactComponent as CartRemoveBtn} from "../../assets/mainRemoveBtn.svg"
import {Sneaker} from "../../Models/Sneaker";
import styles from "./_sneakerCard.module.scss";

interface SneakerCardProps {
  sneaker: Sneaker,
  onCartAction?: (sneaker: Sneaker) => void,
  onFavoriteAction?: (sneaker: Sneaker) => void,
  isAdded?: boolean,
  isFavorite?: boolean
}

const SneakerCard: FC<SneakerCardProps> = ({
   sneaker,
   onCartAction = null,
   onFavoriteAction = null,
   isAdded = false,
   isFavorite= false
}) => {

  const onClickCartAction = () => {
    onCartAction!(sneaker);
  }

  const onClickFavoriteAction = () => {
    onFavoriteAction!(sneaker)
  }

  return (
    <div className={styles.card}>
      {onFavoriteAction &&
          <button
              type="button"
              className={`${styles.favorite} ${isFavorite && styles.active}`}
              onClick={onClickFavoriteAction}
          >
              <FavoriteBtn/>
          </button>
      }
      <img src={sneaker.imgURL} alt="sneaker"/>
      <p>{sneaker.name}</p>
      <div className="d-flex justify-between fa-center">
        <div className="d-flex fd-column">
          <span>Price:</span>
          <b>{sneaker.price} USD</b>
        </div>
        {onCartAction &&
          <button
              type="button"
              className={`${styles.cartAction} ${isAdded ? styles.removeBtn : styles.addBtn}`}
              onClick={onClickCartAction}
          >
            {isAdded ? <CartRemoveBtn/> : <CartAddBtn/>}
          </button>
        }
      </div>
    </div>
  );
};

export default SneakerCard;