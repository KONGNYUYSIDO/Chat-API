import axios from "axios";
import React, { useState } from "react";

import {
  Button,
  Container,
  Form,
  InputGroup,
  Stack,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowpassword] = useState(false);
  const [show, setShow] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const history = useNavigate();

  const handleNavigation = () => {
    history("/chats");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setToastMessage("Please fill in the spaces");
      setToastType("warning");
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const data = await axios.post(
        "http://localhost:5000/api/chat/users/login",
        { username, password },
        config
      );
      setToastMessage("Login Successfully");
      setToastType("success");
      localStorage.setItem("UserData", JSON.stringify(data));
      handleNavigation();
    } catch (error) {
      console.log(
        "Login error:",
        error.response ? error.response.data : error.message
      );

      setToastMessage("Error occurred");
      setToastType("error");
    } finally {
      setShow(true);
    }
  };

  const Passwordshow = () => {
    setShowpassword(!showpassword);
  };

  return (
    <Container className="mt-5">
      <ToastContainer position="top-center" style={{ zIndex: 1050 }}>
        <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
          <Toast.Header>
            <strong className="me-auto">
              {toastType === "success" ? "Success" : "Error"}
            </strong>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            placeholder="Enter email"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={showpassword ? "text" : "password"}
              value={password}
              required
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputGroup.Text>
              <input
                type="checkbox"
                checked={showpassword}
                onChange={Passwordshow}
                aria-label="Show password"
              />
              Show
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <div className="mt-3">
          <span>
            Create an account with ChatinTro{" "}
            <a href="/register" style={{ textDecoration: "none" }}>
              Register
            </a>
          </span>
        </div>

        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="primary" className="mt-5" type="submit">
            Login
          </Button>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="outline-secondary" className="mt-5">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Form>
    </Container>
  );
};

export default Login;
