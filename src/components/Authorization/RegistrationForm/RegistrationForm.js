import React from "react";
import "../FormTemplates.css";

export default class RegistrationForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            login: null,
            password: null,
            passwordRepetition: null,
            email: null,
            privacyCheckbox: false
        }
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangePasswordRepetition = this.handleChangePasswordRepetition.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePrivacyCheckbox = this.handleChangePrivacyCheckbox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.buildForm = this.buildForm.bind(this);
    }

    handleChangeLogin(event) {
        this.setState({login: event.target.value});
    }
    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }
    handleChangePasswordRepetition(event) {
        this.setState({passwordRepetition: event.target.value});
    }
    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }
    handleChangePrivacyCheckbox(event) {
        this.setState({privacyCheckbox: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        this.buildForm(this.state);
    }

     buildForm(form) {
        let newForm = form //form.map(item => {if (item != "passwordRepetition") return item});
        console.log(`Отправлена форма: ${newForm}`);
        fetch('https://fas-games.ru/server/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newForm)
        })
            .then(data => data.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <form name="privacy" className="form" onSubmit={this.handleSubmit}>
                <input type="login" placeholder="Логин" maxLength="40" className="form__input-text"
                       value={this.state.login} onChange={this.handleChangeLogin}/>
                <input type="password" placeholder="Пароль" maxLength="60" name="privacy" className="form__input-text"
                       value={this.state.password} onChange={this.handleChangePassword}/>
                <input type="password" placeholder="Повторите пароль" maxLength="60" className="form__input-text"
                       value={this.state.passwordRepetition} onChange={this.handleChangePasswordRepetition}/>
                <input type="email" placeholder="Почта" maxLength="60" className="form__input-text"
                       value={this.state.email} onChange={this.handleChangeEmail}/>
                <div className="form__privacy-field">
                    <input type="checkbox" name="privacy" className="form__checkbox"
                           checked={this.state.privacyCheckbox} onChange={this.handleChangePrivacyCheckbox}/>
                    <label htmlFor="privacy" className="form__checkbox-label">Я принимаю условия Пользовательского
                        соглашения и даю согласие на обработку моей персональной информации на условиях, определённых
                        Политикой конфиденциальности.</label>
                </div>
                <input type="submit" value="Зарегистрироваться" className="form__submit"/>
            </form>
        )
    }
}