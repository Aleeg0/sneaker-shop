import React from 'react';
import {ReactComponent as CartLogo} from '../assets/cart.svg';
import {ReactComponent as FavoriteLogo} from '../assets/favorite.svg';
import {ReactComponent as ProfileLogo} from '../assets/profile.svg';
import logo from "../assets/logo.svg";

const Header = () => {
    return (
        <header className="shopHeader">
            <div className="shopHeader__info">
                <img src={logo} alt="Logo"/>
                <div className="shopHeader__titles">
                    <h2>React Sneakers</h2>
                    <p>Best sneakers shop</p>
                </div>
            </div>
            <ul>
                <li>
                    <CartLogo/>
                    <p>500 USD</p>
                </li>
                <li>
                    <FavoriteLogo/>
                    <p>Favorite</p>
                </li>
                <li>
                    <ProfileLogo/>
                    <p>Profile</p>
                </li>
            </ul>
            <hr/>
        </header>
    );
};

export default Header;