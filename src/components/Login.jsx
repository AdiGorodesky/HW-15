import React, { useRef } from "react";
import Button from "./Button";

const Login = ({ handleAuth, setShowRegister, alertMsg }) => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();

    const username = userNameRef.current.value;
    const password = passwordRef.current.value;

    if (!username.trim() || !password.trim()) return;

    handleAuth(username, password);
  };
  return (
    <section className="login-container">
      <div className="login-center">
        <h1>Login Form</h1>
        <form onSubmit={handleRegister}>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" ref={userNameRef} />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" ref={passwordRef} />
          <Button className="login-btn">Login</Button>
        </form>
        <div className="auth-switch">
          <p>
            Don't have an account?{" "}
            <Button onClick={() => setShowRegister(true)}>Sign Up</Button>
          </p>
        </div>
        <div className="alert-msg">{alertMsg ? <p>{alertMsg}</p> : null}</div>
      </div>
    </section>
  );
};

export default Login;
