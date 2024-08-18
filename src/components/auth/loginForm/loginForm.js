import {useNavigate} from "react-router-dom";
import AuthService from "../../../services/api/authService";
import React from "react";
const LoginForm = () => {
  const navigate = useNavigate()
  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const username = formData.get("username");
    const password = formData.get("password");
    try {
        await AuthService.login(username,password)
        navigate('/')
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
      <form onSubmit={handleLogin} noValidate>
          <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                  type="text"
                  id="username"
                  name={'username'}
                  className={`form-control`}
              />
          </div>
          <div className="form-group">
              <label htmlFor="password">Parol</label>
              <input
                  type="password"
                  id="password"
                  className={`form-control`}
                  name={'password'}
              />
          </div>
          <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                  Kirish
              </button>
          </div>
      </form>
  );
};

export default LoginForm;
