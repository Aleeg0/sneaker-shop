import React from 'react';
import img from "../assets/images/image1.jpg"
import {ReactComponent as FavoriteBtn} from "../assets/favoriteBtn.svg"
import {ReactComponent as CartAddBtn} from "../assets/mainAddBtn.svg";
import {ReactComponent as CartRemoveBtn} from "../assets/mainRemoveBtn.svg"

const SneakerCard = () => {
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
            <img src={img} alt="sneaker"/>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between fa-center">
                <div className="d-flex fd-column">
                    <span>Price:</span>
                    <b>100 USD</b>
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