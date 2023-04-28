import React from "react";
import './Footer.css'

export default function Footer() {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__inner footer__inner_size_m">
                    <a className="footer__inner-item footer__email"
                       href="https://privacy-policy.fas-games.ru">Конфиденциальность</a>
                    <a className="footer__inner-item footer__email"
                       href="mailto:fas.gamecommunity@gmail.com">fas.gamecommunity@gmail.com</a>
                </div>
            </div>
        </footer>
    )
}