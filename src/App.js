import React from "react";

// import "./App.css";

export default function App() {
  return (
    <body>
      <div className="container">
        <div className="content first-content">
          <div className="first-column">
            <h2 className="title">welcome back </h2>
            <p className="description">To keep connect with us</p>
            <p className="description">Please login with your personal info</p>
            <button className="btn">sign in</button>
          </div>
          {/*first-column*/}

          <div className="second-column">
            <h2 className="title">Create account</h2>

            <div className="social-media">
              <ul>
                <li>
                  <a href="https://pt-br.facebook.com/login/">Facebook</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">Linkedin</a>
                </li>
                <li>
                  <a href="https://myaccount.google.com/profile">Google+</a>
                </li>
              </ul>
            </div>
            {/*social-media */}

            <p className="description">or use your email for registration:</p>
            <form className="form">
              <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
              <input type="password" placeholder="password" />
              <button className="btn">Sign up</button>
            </form>
          </div>
          {/*second-column*/}
        </div>
        {/*first-content*/}

        <div className="content second-content">
          <div className="first-column">
            <h2 className="title">Hello, friend</h2>
            <p className="description">Enter your personal details</p>
            <p className="description">and start journey with us</p>
            <button className="btn">Sign up</button>
          </div>
          {/*first-column*/}

          <div className="second-column">
            <h2 className="title">sign in to developer</h2>

            <div className="social-media">
              <ul>
                <li>
                  <a href="https://pt-br.facebook.com/login/">Facebook</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">Linkedin</a>
                </li>
                <li>
                  <a href="https://myaccount.google.com/profile">Google+</a>
                </li>
              </ul>
            </div>
            {/*social-media */}

            <p className="description">or use yput email for account</p>
            <form className="form">
              <input type="email " placeholder="email" />
              <input type="password" placeholder="password" />
              <a href="#">forgot your password</a>
              <button className="btn">sign in</button>
            </form>
          </div>
          {/*second-column*/}
        </div>{/*second-content*/}
      </div> 
    </body>
  );
}
