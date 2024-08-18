import React from "react";
import LoginForm from "../../../components/auth/loginForm/loginForm";
import './login.css'

const Login = () => {
  return (
      <div className="container login-container">
        <div className="card login-card">
          <div className="card-body login-card-body">
            <h3 className="card-title">Shaxsiy kabinetga kirish</h3>
            <LoginForm/>
          </div>
        </div>
      </div>
  );
};

export default Login;
