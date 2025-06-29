// Login page structure with a form for email and password, and a button to submit the form.
// give user option to login or register
import React from "react";
import LoginForm from "./components/loginForm";

const Login: React.FC = () => {
  return (
    <div>
      <h1>Log In</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
