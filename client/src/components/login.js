import React, { useState } from "react";
import "../App.css";

function Login() {

  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-container">

      <div className="login-box">

        <h2>{isLogin ? "Login to Your Account" : "Create an Account"}</h2>

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            className="login-input"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="login-input"
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
        />

        <button className="login-submit">
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <p className="login-switch">
          {isLogin ? "New user?" : "Already have an account?"}

          <span
            className="login-link"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? " Create an account" : " Login here"}
          </span>
        </p>

      </div>

    </div>
  );
}

export default Login;