import React from "react";
import RegisterForm from "../../../components/auth/loginForm/registerForm";
import { Card } from "react-bootstrap";
import "./register.css";
export const Register = () => {
  return (
    <div className="container" id="register-form-container">
      <Card>
        <Card.Header>
          <h3>Foydalanuvchi ma'lumotlarini kiriting</h3>
        </Card.Header>
        <Card.Body>
          <RegisterForm />
        </Card.Body>
      </Card>
    </div>
  );
};
