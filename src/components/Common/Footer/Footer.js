import React from "react";
import './Footer.css'
import "../../../CommonStyles.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer__container container container_horizontal-margin">
                <div className="footer__inner footer__inner_size_m">
                    <Link className="footer__inner-item footer__email"
                       to="https://fas-games.ru/privacy-policy/#section_privacy">Конфиденциальность</Link>
                    <a className="footer__inner-item footer__email"
                       href="mailto:fas.gamecommunity@gmail.com">fas.gamecommunity@gmail.com</a>
                </div>
            </div>
        </footer>
    )
}