import React from "react";
import api from "../../config/axios";

const handleLogin = async (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const username = formData.get("username");
  const password = formData.get("password");

  try {
    const response = await api.post(
      "/auth/login/",
      {
        username: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Login successful:", response.data);
  } catch (err) {
    console.error("Login failed:", err);
  }
};

const LoginForm = () => {
  return (
    <form method="post" onSubmit={handleLogin}>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input type="text" className="form-control" name="username" />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" name="password" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
