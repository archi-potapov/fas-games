import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthorizationForm from "./AuthorizationForm/AuthorizationForm";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import "./Authorization.css";
import fasid_logo from "./fas-id_logo.png"

export default function Authorization () {
    return (
        <main className="authorization">
            <section className="authorization__container" id="section_authorization">
                <div className="authorization__header">
                    <img src={fasid_logo} alt="FAS ID Logo" className="authorization__header-logo"/>
                    <div className="authorization__header-title">
                        {["СОЗДАНИЕ", <br key={0} />, "АККАУНТА"]}
                    </div>
                </div>
                <div className="authorization__form-container">
                    <Routes>
                        {/*<Route exact path='/' element={<RegistrationForm />} />*/}
                        {/*<Route path='id/login' element={<AuthorizationForm />} />*/}
                        <Route exact path='/' element={<RegistrationForm />} />
                    </Routes>
                </div>
            </section>
        </main>
    )
}