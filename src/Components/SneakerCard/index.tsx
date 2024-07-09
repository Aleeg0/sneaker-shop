import React, {FC} from 'react';
import {ReactComponent as FavoriteBtn} from "../../assets/favoriteBtn.svg"
import {ReactComponent as CartAddBtn} from "../../assets/mainAddBtn.svg";
import {ReactComponent as CartRemoveBtn} from "../../assets/mainRemoveBtn.svg"

interface SneakerCardProps {
    name: string,
    price: number,
    imgURL: string
}

const SneakerCard: FC<SneakerCardProps> = ({name,price,imgURL}) => {
    const [isFavorite, setIsFavorite] = React.useState(false);
    const [isAdded, setIsAdded] = React.useState(false);

    return (
        <div className="card">
            <button
                type="button"
                className={`favorite ${isFavorite && "active"}`}
                onClick={() => setIsFavorite(!isFavorite)}
            >
                <FavoriteBtn/>
            </button>
            <img src={imgURL} alt="sneaker"/>
            <p>{name}</p>
            <div className="d-flex justify-between fa-center">
                <div className="d-flex fd-column">
                    <span>Price:</span>
                    <b>{price} USD</b>
                </div>
                <button
                    type="button"
                    className={`cartAction ${isAdded ? "removeBtn": "addBtn"}`}
                    onClick={() => setIsAdded(!isAdded)}
                >
                    {isAdded ? <CartRemoveBtn/> : <CartAddBtn/>}
                </button>
            </div>
        </div>
    );
};

export default SneakerCard;