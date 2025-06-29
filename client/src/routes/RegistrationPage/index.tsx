// Login page structure with a form for email and password, and a button to submit the form.
// give user option to login or register
import React from "react";
// import Button from "../../components/button";

const Register: React.FC = () => {
  return (
    // if user is not logged in, redirect to login page
    // if user is logged in, display the home page content
    <div>
      <h1>Welcome to the Register Page</h1>
      <p>This is the Register page of the application.</p>
      {/* You can add more components or content here */}
    </div>

    /*
    build a registration form with email, name, and password / re-type password fields
    needs to: 
    - validate email and password
    - submit the form to the server
    - handle errors and display messages (e.g., email already exists, password too short, etc.)
    - redirect to the login page on successful registration
   
    - (until the api is ready, use a mock api where registration and login are pushed into a local seed data file) then we can use the mock api to test the login and registration functionality
    - add a button to switch to the login page if the user is on the registration page
    
    */
  );
};

export default Register;
