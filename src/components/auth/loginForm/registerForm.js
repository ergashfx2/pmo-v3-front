import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import authService from "../../../services/api/authService";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [validationErrors, setErrors] = useState({});
  const navigate = useNavigate();
  function handleRegisterForm(event) {
    event.preventDefault();
    const form = event.target;
    let formData = new FormData(form);
    const res = authService.register(formData);
    res.then((res) => {
      if (res.status === 400) {
        console.log(res.data);
        setErrors(res.data);
      } else {
        navigate("/users");
      }
    });
  }
  return (
    <Form onSubmit={handleRegisterForm}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          required
          type="text"
          name="username"
          isInvalid={!!validationErrors.username}
        />
        <Form.Control.Feedback type="invalid">
          {validationErrors.username?.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password1"
          required
          isInvalid={
            !!validationErrors.password1 || !!validationErrors.non_field_errors
          }
        />
        <Form.Control.Feedback type="invalid">
          {validationErrors.password1?.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
          {validationErrors.non_field_errors?.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="password2"
          required
          isInvalid={
            !!validationErrors.password1 || !!validationErrors.non_field_errors
          }
        />
      </Form.Group>

      <Button type="primary" size="md">
        Yaratish
      </Button>
    </Form>
  );
};

export default RegisterForm;
