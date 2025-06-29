import React from "react";
import { isLoggedIn } from "../../utils/isLoggedIn";
import { Navigate } from "react-router-dom";

const Home: React.FC = () => {
  // if user is not logged in, redirect to login page
  // if user is logged in, display the home page content
  return isLoggedIn() ? (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of the application.</p>
      {/* You can add more components or content here */}
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Home;
