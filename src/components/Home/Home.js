import React from "react";
import "./Home.css";
import "../Common/Header/Header.css"; //Only for first section
import "../../CommonStyles.css"
import logo from "../Common/Header/logo.jpg";

export default function Home() {
    const studioName = ['FUN ', <br key={0} />, 'ADVENTURE', <br key={1} />, 'STUDIO'];
    return(
        <main>
            <div className="header__content" id="section_1">
                <div className="container container_horizontal-margin">
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
            <section className="default-section game-section default-section_theme_game">
                <div className="container container_horizontal-margin container_all-sides-padding">
                    <div className="default-section__inner default-section__inner_size_m">
                        <div className="default-section__item">
                            <a className="default-section__card default-section__card_theme_game" target="_blank">
                                <img className="default-section__card-image default-section__card-image_theme_game"
                                     src={require("./cardImg_game.png")} alt=""></img>
                                <div className="default-section__card default-section__card_theme_game default-section__card_shadow_inside"></div>
                                {
                                    // <!-- <div class="default-section__card-button">
                                //   <span class="default-section__card-button-text">ПОДРОБНЕЕ</span>
                                // </div> -->
                                }
                            </a>
                        </div>
                        <div className="default-section__items-container">
                            <div
                                className="default-section__item default-section__text default-section__text_text-color_white">
                                <div className="default-section__title text-shadow">
                                    <h1>
                                        TRS
                                    </h1>
                                </div>
                                <div className="default-section__description text-shadow">
                                    <p>
                                        Выживай, защищайся, строй убежища, совершенствуй навыки и многое другое!
                                    </p>
                                </div>
                            </div>
                            <div className="default-section__item default-section__additional">
                                <div className="game-section__downloads-block">
                                    <div className="game-section__downloads-number">
                                        <span>100,000+</span>
                                        <span>установок</span>
                                    </div>
                                    <a className="game-section__link game-section__gp-link"
                                       href="https://play.google.com/store/apps/details?id=com.fas.trs&hl=en&gl=US"
                                       target="_blank"></a>
                                    <a className="game-section__link game-section__ag-link"
                                       href="https://appgallery.huawei.com/app/C105289117" target="_blank"></a>
                                    <a className="game-section__link game-section__rs-link"
                                       href="https://apps.rustore.ru/app/com.fas.trs" target="_blank"></a>
                                    {//<!-- <a class="game-section__link game-section__ns-link" href="https://store.nashstore.ru/store/628a0996fb3ed386ed2e83bf" target="_blank"></a> -->
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="default-section default-section_theme_yt" id="section_2">
                <div className="container container_horizontal-margin container_all-sides-padding">
                    <div
                        className="default-section__inner default-section__inner_reverse default-section__inner_size_350px">
                        <div className="default-section__item">
                            <a className="default-section__card default-section__card_size_194x360 default-section__card_theme_yt"
                               href="https://www.youtube.com/channel/UCaVRYJOrWrs6cHXjigR3gmQ" target="_blank">
                                <img className="default-section__card-image default-section__card-image_theme_yt"
                                     src={require("./cardImg_yt.png")} alt=""></img>
                                    <div className="default-section__card-button">
                                        <span className="default-section__card-button-text">ТЫК</span>
                                    </div>
                            </a>
                        </div>
                        <div className="default-section__items-container">
                            <div className="default-section__item default-section__text">
                                <div className="default-section__title">
                                    <p>
                                        YouTube
                                    </p>
                                </div>
                                <div className="default-section__description">
                                    <p>
                                        Подписывайся, и следи за самыми интересными роликами по игре и не только!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="default-section default-section_theme_vk" id="section_3">
                <div className="container container_horizontal-margin container_all-sides-padding">
                    <div className="default-section__inner default-section__inner_size_350px">
                        <div className="default-section__item">
                            <a className="default-section__card default-section__card_size_194x360 default-section__card_theme_vk"
                               href="https://vk.com/funadvstudio" target="_blank">
                                <img className="default-section__card-image default-section__card-image_theme_vk"
                                     src={require("./cardImg_vk.png")} alt=""></img>
                                    <div
                                        className="default-section__card-button default-section__card-button_theme_dark">
                                        <span className="default-section__card-button-text">ТЫК</span>
                                    </div>
                            </a>
                        </div>
                        <div className="default-section__items-container">
                            <div className="default-section__item default-section__text">
                                <div className="default-section__title">
                                    <p>
                                        VK
                                    </p>
                                </div>
                                <div className="default-section__description">
                                    <p>
                                        Будь одним из тех, кто будет в курсе всех последних новостей!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="default-section default-section_theme_donates" id="section_4">
                <div className="container container_horizontal-margin container_all-sides-padding">
                    <div
                        className="default-section__inner default-section__inner_reverse default-section__inner_size_350px">
                        <div className="default-section__item">
                            <a className="default-section__card default-section__card_size_194x360 default-section__card_theme_donates"
                               href="https://qiwi.com/n/ARPOT" target="_blank">
                                <img className="default-section__card-image default-section__card-image_theme_donates"
                                     src={require("./cardImg_donates.png")} alt=""></img>
                                    <div
                                        className="default-section__card-button default-section__card-button_theme_dark">
                                        <span className="default-section__card-button-text">ПОДДЕРЖАТЬ</span>
                                    </div>
                            </a>
                        </div>
                        <div className="default-section__items-container">
                            <div className="default-section__item default-section__text">
                                <div className="default-section__title">
                                    <p>
                                        Финансовая помощь
                                    </p>
                                </div>
                                <div className="default-section__description">
                                    <p>
                                        Помоги в развитии проекта, ведь только от тебя зависит его будущее!
                                        Помни, в игре минимум рекламы, весь контент абсолютно бесплатный, и делается исключительно на инициативе
                                        разработчика!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}