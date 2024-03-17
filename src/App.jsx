import React from "react";
import AuthProvider from "./context/AuthProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import StudentsPage from "./pages/StudentsPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <main>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/students" element={<StudentsPage />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </main>
  );
};

export default App;
