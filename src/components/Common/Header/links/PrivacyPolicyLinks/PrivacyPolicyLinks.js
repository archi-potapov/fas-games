import React from "react";
import "../../Header.css";

export default function PrivacyPolicyLinks () {
    return(
        <nav className="menu header__menu">
            <ul className="menu__list">
                <li key={0} className="menu__list-item">
                    <a className="menu__link" href="#section_1">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</a>
                </li>
            </ul>
        </nav>
    );
}