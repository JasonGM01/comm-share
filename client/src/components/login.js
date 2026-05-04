import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (isSignup && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const url = isSignup ? "/api/signup" : "/api/login";

    const res = await fetch(`http://localhost:3001${url}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user || data);
      navigate("/profile");
    } else {
      alert(data.message || "Error");
    }
  };

  return (
    <div className="App">
      <h1>{isSignup ? "Create an Account" : "Sign Up / Login"}</h1>

      <p>
        {isSignup
          ? "Fill out the form below to create your account."
          : "Log in to access community features."}
      </p>

      <div style={{ marginTop: "30px" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "350px",
            padding: "12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px",
            marginBottom: "10px",
          }}
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "350px",
            padding: "12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        {isSignup && (
          <>
            <br />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                width: "350px",
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "16px",
                marginTop: "10px",
              }}
            />
          </>
        )}

        <br />

        <button style={{ marginTop: "20px" }} onClick={handleSubmit}>
          {isSignup ? "Create Account" : "Login"}
        </button>

        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          {isSignup ? (
            <>
              Already have an account?{" "}
              <span
                style={{ color: "green", cursor: "pointer" }}
                onClick={() => setIsSignup(false)}
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span
                style={{ color: "green", cursor: "pointer" }}
                onClick={() => setIsSignup(true)}
              >
                Sign Up
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default Login;