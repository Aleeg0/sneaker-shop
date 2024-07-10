import React, {FC} from 'react';
import {ReactComponent as ArrowImg} from '../../assets/orderArrow.svg';
import {useNavigate} from "react-router-dom";
import {useCartSneakers} from "../../Hooks/Cart/useCartSneakers";

interface InfoCardProps {
  title: string,
  description: string,
  imgName: string,
  altText: string,
}

const InfoCard: FC<InfoCardProps> = ({title,description,imgName,altText}) => {
  const navigate = useNavigate();
  const {setIsCartOpened} = useCartSneakers();

  const onCloseCart = () => {
    setIsCartOpened(false);
    navigate(-1);
  }

  return (
    <div className="infoCard">
      <img src={process.env.PUBLIC_URL + `/images/${imgName}`} alt={altText} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button
        onClick={onCloseCart}
      >
        <ArrowImg/>
        Go back
      </button>
    </div>
  );
};

export default InfoCard;