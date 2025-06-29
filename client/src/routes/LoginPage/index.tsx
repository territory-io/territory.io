// Login page structure with a form for email and password, and a button to submit the form.
// give user option to login or register
import React from "react";
import { useForm } from "react-hook-form";
// import Button from "../../components/button";

interface UserLoginValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginValues>();

  const onSubmit = async (data: UserLoginValues) => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // Handle invalid credentials or server errors
        const errorData = await response.json();
        alert(errorData.message || "Login failed");
        return;
      }

      // Handle successful login (e.g., save token, redirect)
      const result = await response.json();
      alert("Login successful!");
      // Example: localStorage.setItem("token", result.token);
      // Redirect user or update app state here
    } catch (error) {
      alert("An error occurred during login.");
    }
  };

  return (
    <div>
      <h1>Log In</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
