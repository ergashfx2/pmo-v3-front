import {useNavigate} from "react-router-dom";
import AuthService from "../../../services/api/authService";
import {Button, Form} from "react-bootstrap";
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
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="login-username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="username" placeholder="Username yozing" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="login-password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Parolingizni yozing" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
