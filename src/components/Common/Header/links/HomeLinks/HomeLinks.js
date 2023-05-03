import React from "react";
import "../../Header.css";

export default function HomeLinks () {
    return(
        <nav className="menu header__menu">
            <ul className="menu__list">
                <li key={0} className="menu__list-item">
                    <a className="menu__link" href="#section_about">О НАС</a>
                </li>
                <li key={1} className="menu__list-item">
                    <a className="menu__link" href="#section_media_yt">МЕДИА</a>
                </li>
                <li key={2} className="menu__list-item">
                    <a className="menu__link" href="#section_donates">ПОМОЩЬ ПРОЕКТУ</a>
                </li>
                {/*<li key={3} className="menu__list-item">*/}
                {/*    <a className="menu__link" href="#section_1">ЛИЧНЫЙ КАБИНЕТ</a>*/}
                {/*</li>*/}
            </ul>
        </nav>
    );
};