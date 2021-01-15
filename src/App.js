import React from "react";

import "./App.css";

export default function App() {
  return (
      <div className="container">
        <div className="content first-content">
          <div className="first-column">
            <h2 className="title title-primary">bem-vindo de volta!</h2>
            <p className="description description-primary">
            Para se manter conectado conosco
            </p>
            <p className="description description-primary">
            por favor faça o login com suas informações pessoais
            </p>
            <button id="signin" className="btn btn-primary">
              sign in
            </button>
          </div>

          <div className="second-column">
            <h2 className="title title-second">criar conta</h2>
            <div className="social-media">
              <ul className="list-social-media">
                <a className="link-social-media" href="https://pt-br.facebook.com/login/">
                  <li className="item-social-media">
                    <i className="fab fa-facebook-f"></i>
                  </li>
                </a>
                <a className="link-social-media" href="https://myaccount.google.com/profile">
                  <li className="item-social-media">
                    <i className="fab fa-google-plus-g"></i>
                  </li>
                </a>
                <a className="link-social-media" href="https://www.linkedin.com/">
                  <li className="item-social-media">
                    <i className="fab fa-linkedin-in"></i>
                  </li>
                </a>
              </ul>
            </div>
            {/*social media*/}
            <p className="description description-second">
            ou use seu e-mail para registro:
            </p>
            <form className="form">
              <label className="label-input" htmlFor="">
                <i className="far fa-user icon-modify"></i>
                <input autoFocus type="text" placeholder="Name" />
              </label>

              <label className="label-input" htmlFor="">
                <i className="far fa-envelope icon-modify"></i>
                <input type="email" placeholder="Email" />
              </label>

              <label className="label-input" htmlFor="">
                <i className="fas fa-lock icon-modify"></i>
                <input type="password" placeholder="Password" />
              </label>

              <button className="btn btn-second">sign up</button>
            </form>
          </div>
          {/*second column*/}
        </div>
        {/*first content*/}
        <div className="content second-content">
          <div className="first-column">
            <h2 className="title title-primary">Olá amigo(a)!</h2>
            <p className="description description-primary">
            Insira seus dados pessoais
            </p>
            <p className="description description-primary">
            e comece a jornada conosco
            </p>
            <button id="signup" className="btn btn-primary">
              sign up
            </button>
          </div>
          <div className="second-column">
            <h2 className="title title-second">entrar na conta admin.</h2>
            <div className="social-media">
              <ul className="list-social-media">
                <a className="link-social-media" href="https://pt-br.facebook.com/login/">
                  <li className="item-social-media">
                    <i className="fab fa-facebook-f"></i>
                  </li>
                </a>
                <a className="link-social-media" href="https://myaccount.google.com/profile">
                  <li className="item-social-media">
                    <i className="fab fa-google-plus-g"></i>
                  </li>
                </a>
                <a className="link-social-media" href="https://www.linkedin.com/">
                  <li className="item-social-media">
                    <i className="fab fa-linkedin-in"></i>
                  </li>
                </a>
              </ul>
            </div>
            {/*social media*/}
            <p className="description description-second">
            ou use sua conta de e-mail:
            </p>
            <form className="form">
              <label className="label-input" htmlFor="">
                <i className="far fa-envelope icon-modify"></i>
                <input autoFocus type="email" placeholder="Email" />
              </label>

              <label className="label-input" htmlFor="">
                <i className="fas fa-lock icon-modify"></i>
                <input type="password" placeholder="Password" />
              </label>

              <a className="password" href="#">
              Esqueceu sua senha?
              </a>
              <button className="btn btn-second">sign in</button>
            </form>
          </div>
          {/*second column*/}
        </div>
        {/*second-content*/}
      </div>
  );
}

