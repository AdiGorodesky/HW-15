import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/AuthProvider";

const LoginPage = () => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const [alertMsg, setAlertMsg] = useState(null);

  const navigate = useNavigate();
  const { handleLogin, user } = useUser();

  useEffect(() => {
    if (user) {
      navigate("/students");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = userNameRef.current.value;
    const password = passwordRef.current.value;

    if (!username.trim() || !password.trim()) return;

    const existUser = handleLogin(username, password);

    if (!existUser) {
      setAlertMsg("Invalid credentials");
    }
  };
  return (
    <section className="login-container">
      <div className="login-center">
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" ref={userNameRef} />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" ref={passwordRef} />
          <Button className="login-btn">Login</Button>
        </form>
        <div className="auth-switch">
          <p>
            Don't have an account?{" "}
            <Button onClick={() => navigate("/signup")}>Login</Button>
          </p>
        </div>
        <div className="alert-msg">{alertMsg ? <p>{alertMsg}</p> : null}</div>
      </div>
    </section>
  );
};

export default LoginPage;
