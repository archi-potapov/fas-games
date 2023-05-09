import React from "react";
import {Link} from "react-router-dom";

export default function RegistrationLinks () {
    return (
        <nav className="menu header__menu">
            <ul className="menu__list">
                <li key={0} className="menu__list-item">
                    <Link className="menu__link" to="https://fas-games.ru/#section_about">ГЛАВНАЯ СТРАНИЦА</Link>
                </li>
                <li key={1} className="menu__list-item">
                    <a className="menu__link" href="#section_authorization" >РЕГИСТРАЦИЯ</a>
                </li>
            </ul>
        </nav>
    )
}