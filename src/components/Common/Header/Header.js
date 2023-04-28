import React from "react";
import './Header.css';
import logo from './logo.jpg'
export default function Header() {
    const studioName = ['FUN ', <br />, 'ADVENTURE', <br />, 'STUDIO'];
    return(
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="header__top-inner">
                        <div className="header__bg"></div>
                        <div className="logo">
                            <div className="header__logo">
                                <a className="logo__link" href="https://fas-games.ru/">
                                    <img src={logo} alt="FAS-Logo" className="logo__img logo__img_header-style"></img>
                                        <span className="logo__abbreviation">FAS</span>
                                </a>
                            </div>
                        </div>
                        <input className="menu__switcher" type="checkbox" id="menu"></input>
                            <label htmlFor="menu">
                                <div className="menu-label">
                                    <div className="menu-label__stripe"></div>
                                    <div className="menu-label__stripe"></div>
                                </div>
                            </label>
                            <nav className="menu header__menu">
                                <ul className="menu__list">
                                    <li className="menu__list-item">
                                        <a className="menu__link" href="#section_1">О НАС</a>
                                    </li>
                                    <li className="menu__list-item">
                                        <a className="menu__link" href="#section_2">МЕДИА</a>
                                    </li>
                                    <li className="menu__list-item">
                                        <a className="menu__link" href="#section_4">ПОМОЩЬ ПРОЕКТУ</a>
                                    </li>
                                </ul>
                            </nav>
                    </div>
                </div>
            </div>
            <div className="header__content" id="section_1">
                <div className="container">
                    <div className="header__content-inner">
                        <div className="logo logo_z-index-0">
                            <a className="logo__link logo__link_gap_28px" href="https://fas-games.ru/">
                                <img src={logo} alt="FAS-Logo" className="logo__img logo__img_size_87px"></img>
                                    <span className="logo__full-description">{studioName}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}