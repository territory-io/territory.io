import React from "react";
import { isLoggedIn } from "../../utils/isLoggedIn";
import { Navigate } from "react-router-dom";
import { isGrouped } from "../../utils/isGrouped"; // Assuming this utility checks if the user is part of a group/team
import Grouper from "./components/Grouper"; // Import the Grouper component

const Home: React.FC = () => {
  // if user is not logged in, redirect to login page
  // if user is logged in, display the home page content
  return isLoggedIn() && !isGrouped() ? (
    <div>
      <Grouper />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Home;
