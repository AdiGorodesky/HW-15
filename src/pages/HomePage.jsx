import React, { useEffect } from "react";
import { useUser } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    navigate("/students");
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;
