import React, {FC} from 'react';
import {ReactComponent as FavoriteBtn} from "../../assets/favoriteBtn.svg"
import {ReactComponent as CartAddBtn} from "../../assets/cardAddBtn.svg";
import {ReactComponent as CartRemoveBtn} from "../../assets/cardRemoveBtn.svg"
import {Sneaker} from "../../Models/Sneaker";
import styles from "./_sneakerCard.module.scss";
import ContentLoader from "react-content-loader";

interface SneakerCardProps {
  sneaker: Sneaker,
  isLoading?: boolean,
  onCartAction?: (sneaker: Sneaker) => void,
  onFavoriteAction?: (sneaker: Sneaker) => void,
  isAdded?: boolean,
  isFavorite?: boolean,
}

const SneakerCard: FC<SneakerCardProps> = ({
   sneaker,
   onCartAction = null,
   onFavoriteAction = null,
   isAdded = false,
   isFavorite= false,
   isLoading = false,
}) => {

  const onClickCartAction = () => {
    onCartAction!(sneaker);
  }

  const onClickFavoriteAction = () => {
    onFavoriteAction!(sneaker)
  }

  return (
    <div className={styles.card}>
      {isLoading ?
        <ContentLoader
          speed={2}
          width={150}
          height={200}
          viewBox="0 0 150 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
          <rect x="0" y="107" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="126" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="163" rx="8" ry="8" width="80" height="24" />
          <rect x="118" y="161" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
        :
        <>
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
        </>
      }
    </div>
  );
};

export default SneakerCard;