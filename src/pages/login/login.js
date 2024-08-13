import React from "react";
import LoginForm from "../../components/loginForm/loginForm";

const login = () => {
  return (
    <div>
      <div className="container login-container">
        <div className="card login-card">
          <div className="card-body login-card-body">
            <h3 className="card-title">Shaxsiy kabinetga kirish</h3>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
