import React from "react";
import { Link, Routes, Route} from "react-router-dom";
import "../../../CommonStyles.css";
import './Header.css';
import logo from './logo.jpg'
import HomeLinks from "./links/HomeLinks/HomeLinks";
import PrivacyPolicyLinks from "./links/PrivacyPolicyLinks/PrivacyPolicyLinks";
export default function Header() {
    return(
        <header className="header">
            <div className="header__top">
                <div className="header__container container container_horizontal-margin">
                    <div className="header__top-inner">
                        <div className="header__bg"></div>
                        <div className="logo">
                            <div className="header__logo">
                                <Link className="logo__link" to="https://fas-games.ru/">
                                    <img src={logo} alt="FAS-Logo" className="logo__img logo__img_header-style"></img>
                                        <span className="logo__abbreviation">FAS</span>
                                </Link>
                            </div>
                        </div>
                        <input className="menu__switcher" type="checkbox" id="menu"></input>
                            <label htmlFor="menu">
                                <div className="menu-label">
                                    <div className="menu-label__stripe"></div>
                                    <div className="menu-label__stripe"></div>
                                </div>
                            </label>
                            <Routes>
                                <Route exact path='/' element={<HomeLinks />} />
                                <Route path='/privacy-policy' element={<PrivacyPolicyLinks />} />
                            </Routes>
                    </div>
                </div>
            </div>
        </header>
    )
}