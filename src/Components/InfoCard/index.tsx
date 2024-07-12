import React, {FC} from 'react';
import {ReactComponent as ArrowImg} from '../../assets/orderArrow.svg';
import styles from "./_infoCard.module.scss"

interface InfoCardProps {
  title: string,
  description: string,
  imgName: string,
  altText: string,
  onButtonClick: () => void
}

const InfoCard: FC<InfoCardProps> = ({
  title,
  description,
  imgName,
  altText,
  onButtonClick
}) => {

  return (
    <div className={styles.infoCard}>
      <img src={process.env.PUBLIC_URL + `/images/${imgName}`} alt={altText} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button
        onClick={onButtonClick}
      >
        <ArrowImg/>
        Go back
      </button>
    </div>
  );
};

export default InfoCard;