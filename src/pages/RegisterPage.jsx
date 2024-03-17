import React, { useRef } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/AuthProvider";

const RegisterPage = () => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const navigate = useNavigate();
  const { handleRegister, user } = useUser();

  useEffect(() => {
    if (user) {
      navigate("/students");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = userNameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    if (!username.trim() || !password.trim() || !email.trim()) return;

    const newUser = { username, password, email };
    handleRegister(newUser);
  };
  return (
    <section className="register-container">
      <div className="register-center">
        <h1>Register Form</h1>
        <form onSubmit={handleSubmit}>
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
            <Button onClick={() => navigate("/login")}>Sign In</Button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
