import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/api/authService";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
const LoginForm = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await AuthService.login(username, password);
      navigate("/");
    } catch (err) {
      setError("Username yoki parol xato kiritilgan");
    }
  };

  return (
    <form onSubmit={handleLogin} noValidate>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name={"username"}
          className={`form-control`}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Parol</label>
        <input
          type="password"
          id="password"
          className={`form-control`}
          name={"password"}
        />
      </div>
      <div className="form-group">
        {error ? (
          <Form.Control.Feedback className="mb-3" type="invalid">
            {error}
          </Form.Control.Feedback>
        ) : null}
        <button type="submit" className="btn btn-primary btn-block">
          Kirish
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
