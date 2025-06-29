// import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/HomePage";
import MainPage from "./routes/MainPage";
import Login from "./routes/LoginPage";
import Register from "./routes/RegistrationPage";
import "./styles/App.css";
import "./styles/index.css";

const App: React.FC = () => {
  return (
    <Router>
      <nav className="app-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/main">Main</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Add more routes for other views */}
      </Routes>
    </Router>
  );
};

export default App;
