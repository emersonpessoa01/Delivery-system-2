import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="content first-content">
        <div className="first-column">
          <h2 className="title title-primary">Welcome back </h2>
          <p className="description description-primary">
            To keep connect with us
          </p>
          <p className="description description-primary">
            Please login with your personal info
          </p>
          <button className="btn btn-primary">sign in</button>
        </div>
        {/*first-column*/}

        <div className="second-column">
          <h2 className="title title-second">Create account</h2>

          <div className="social-media">
            <ul className="list-social-media">
              <a className="link-social-media" href="https://pt-br.facebook.com/login/">
                <li className="item-social-media">
                  <i className="fab fa-facebook-f"></i>
                </li>
              </a>

              <a className="link-social-media" href="https://www.linkedin.com/">
                <li className="item-social-media">
                  <i className="fab fa-linkedin-in"></i>
                </li>
              </a>

              <a className="link-social-media" href="https://myaccount.google.com/profile">
                <li className="item-social-media">
                  <i className="fab fa-google-plus-g"></i>
                </li>
              </a>
            </ul>
          </div>
          {/*social-media */}

          <p className="description description-second">
            or use your email for registration:
          </p>
          <form className="form">
            <label className="label-input" htmlFor="">
              <i className="far fa-user icon-modify"></i>
              <input autoFocus type="text" placeholder="name" />
            </label>

            <label className="label-input" htmlFor="">
              <i className="far fa-envelope icon-modify"></i>
              <input type="email" placeholder="email" />
            </label>

            <label className="label-input" htmlFor="">
              <i className="fas fa-lock icon-modify"></i>
              <input type="password" placeholder="password" />
            </label>
            <button className="btn btn-second">Sign up</button>
          </form>
        </div>
        {/*second-column*/}
      </div>
      {/*first-content*/}

      <div className="content second-content">
        <div className="first-column">
          <h2 className="title title-primary">Hello, friend</h2>
          <p className="description description-primary">Enter your personal details</p>
          <p className="description description-primary">and start journey with us</p>
          <button className="btn btn-primary">Sign up</button>
        </div>
        {/*first-column*/}

        <div className="second-column">
          <h2 className="title title-second">sign in to developer</h2>

          <div className="social-media">
            <ul className="list-social-media">
              <a className="link-social-media" href="https://pt-br.facebook.com/login/">
                <li className="item-social-media">
                  <i className="fab fa-facebook-f"></i>
                </li>
              </a>

              <a className="link-social-media" href="https://www.linkedin.com/">
                <li className="item-social-media">
                  <i className="fab fa-linkedin-in"></i>
                </li>
              </a>

              <a className="link-social-media" href="https://myaccount.google.com/profile">
                <li className="item-social-media">
                  <i className="fab fa-google-plus-g"></i>
                </li>
              </a>
            </ul>
          </div>
          {/*social-media */}

          <p className="description description-second">or use your email for account</p>
          <form className="form">

            <label className="label-input" htmlFor="">
              <i className="far fa-envelope icon-modify"></i>
              <input type="email" placeholder="email" />
            </label>

            <label className="label-input" htmlFor="">
              <i className="fas fa-lock icon-modify"></i>
              <input type="password" placeholder="password" />
            </label>

            <a className="password" href="#">forgot your password</a>
            <button className="btn btn-second">Sign in</button>
          </form>
        </div>
        {/*second-column*/}
      </div>
      {/*second-content*/}
    </div>
  );
}
