import React from 'react';
import {ReactComponent as CartLogo} from '../../assets/cart.svg';
import {ReactComponent as FavoriteLogo} from '../../assets/favorite.svg';
import {ReactComponent as ProfileLogo} from '../../assets/profile.svg';
import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";
import {useCartSneakers} from "../../Hooks/Cart/useCartSneakers";
import styles from "./_header.module.scss"

const Header = () => {
    const {setIsCartOpened, total} = useCartSneakers();

    return (
        <header>
            <div className={styles.shopHeader}>
                <Link to="/">
                    <div className={styles.shopHeader__info}>
                        <img src={logo} alt="Logo"/>
                        <div className={styles.shopHeader__titles}>
                            <h2>Sneakers.by</h2>
                            <p>Best sneakers shop</p>
                        </div>
                    </div>
                </Link>
                <ul>
                    <li onClick={() => setIsCartOpened(true)}>
                        <Link to="cart">
                            <CartLogo/>
                            <p>{total} USD</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/favorites">
                            <FavoriteLogo/>
                            <p>Favorite</p>
                        </Link>

                    </li>
                    <li>
                        <Link to="/profile">
                            <ProfileLogo/>
                            <p>Profile</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <hr/>
        </header>
    );
};

export default Header;