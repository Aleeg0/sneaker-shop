import React, {FC} from 'react';
import {ReactComponent as ArrowImg} from '../../assets/orderArrow.svg';
import styles from "./_infoCard.module.scss"
import {Link} from "react-router-dom";

interface InfoCardProps {
  title: string,
  description: string,
  imgName: string,
  altText: string,
  onButtonClick?: () => void
  to?: string,
}

const InfoCard: FC<InfoCardProps> = ({
  title,
  description,
  imgName,
  altText,
  onButtonClick = null,
  to = "",
}) => {

  return (
    <div className={styles.infoCard}>
      <img src={process.env.PUBLIC_URL + `/images/${imgName}`} alt={altText} />
      <h2>{title}</h2>
      <pre>{description}</pre>
        {onButtonClick ?
          <button
            onClick={onButtonClick}
          >
            <ArrowImg/>
            Go back
          </button>
          :
          <Link to={to}>
            <button>
              <ArrowImg/>
              Go back
            </button>
          </Link>
        }
        </div>
        );
      };

export default InfoCard;