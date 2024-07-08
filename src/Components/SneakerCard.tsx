import React from 'react';
import img from "../assets/images/image1.jpg"
import {ReactComponent as FavoriteBtn} from "../assets/favoriteBtn.svg"
import {ReactComponent as CartBtn} from "../assets/cartBtnAdd.svg";

const SneakerCard = () => {
    const [isAdded, setIsAdded] = React.useState(false);

    return (
        <div className="card">
            <button
                className={`favorite ${isAdded && "active"}`}
                onClick={() => setIsAdded(!isAdded)}
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
                <button className="cartAction">
                    <CartBtn/>
                </button>
            </div>
        </div>
    );
};

export default SneakerCard;