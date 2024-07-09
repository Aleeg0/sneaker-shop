import React, {FC} from 'react';
import {ReactComponent as FavoriteBtn} from "../../assets/favoriteBtn.svg"
import {ReactComponent as CartAddBtn} from "../../assets/mainAddBtn.svg";
import {ReactComponent as CartRemoveBtn} from "../../assets/mainRemoveBtn.svg"
import Sneaker from "../../Models/Sneaker";

interface SneakerCardProps {
    id:number,
    name: string,
    price: number,
    imgURL: string,
    onAction: (sneaker: Sneaker, added: boolean) => void,
    isAdd: boolean
}

const SneakerCard: FC<SneakerCardProps> = ({id,name,price,imgURL,onAction, isAdd}) => {
    const [isAdded,setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const onClickAction = () => {
        onAction({id,name,price,imgURL},isAdd);
        //setIsAdded(!isAdd);
    }

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
                    className={`cartAction ${isAdd ? "removeBtn": "addBtn"}`}
                    onClick={onClickAction}
                >
                    {isAdd ? <CartRemoveBtn/> : <CartAddBtn/>}
                </button>
            </div>
        </div>
    );
};

export default SneakerCard;