import React, { useRef } from "react";
import Button from "./Button";

const Register = ({ handleAuth, setShowRegister }) => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();

    const username = userNameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    if (!username.trim() || !password.trim() || !email.trim()) return;

    handleAuth(username, password, true, email);
  };
  return (
    <section className="register-container">
      <div className="register-center">
        <h1>Register Form</h1>
        <form onSubmit={handleRegister}>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" ref={userNameRef} />
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" ref={emailRef} />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" ref={passwordRef} />
          <Button className="register-btn">Sign Up</Button>
        </form>
        <div className="auth-switch">
          <p>
            Already have an account?{" "}
            <Button onClick={() => setShowRegister(false)}>Sign In</Button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
