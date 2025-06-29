// Login page structure with a form for email and password, and a button to submit the form.
// give user option to login or register
import React from "react";
import Button from "../../components/button";

const Login: React.FC = () => {
  return (
    // if user is not logged in, redirect to login page
    // if user is logged in, display the home page content
    <div>
      <h1>Welcome to the Login Page</h1>
      <p>This is the Login page of the application.</p>
      {/* You can add more components or content here */}
    </div>
  );
};

export default Login;
