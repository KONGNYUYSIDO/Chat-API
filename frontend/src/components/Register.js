import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Stack,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowpassword] = useState(false);
  const [show, setShow] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const history = useNavigate();

  const handleNavigation = () => {
    history("/chats");
  };

  const handleSubmit = async () => {
    if (
      !firstname ||
      !lastname ||
      !username ||
      !number ||
      !email ||
      !password
    ) {
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
        "http://localhost:5000/api/chat/users/register",
        { firstname, lastname, username, number, email, password },
        config
      );
      setToastMessage("Registered Successfully");
      setToastType("success");
      localStorage.setItem("UserData", JSON.stringify(data));
      handleNavigation();
    } catch (error) {
      console.log(
        "Registration error:",
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
    <Container>
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
      <h2>Signup</h2>
      <Form>
        <Row
          style={{
            // height: "100vh",
            justifyContent: "center",
            paddingTop: "10%",
          }}
          className="mb-3"
        >
          {/* <Stack> */}
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>FirstName</Form.Label>
            <Form.Control
              type="text"
              value={firstname}
              required
              placeholder="firstname"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>LastName</Form.Label>
            <Form.Control
              type="text"
              value={lastname}
              required
              placeholder="lastname"
              onChange={(e) => setLastname(e.target.value)}
            />
          </Form.Group>
          {/* </Stack> */}
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="text"
            value={username}
            required
            placeholder="Main street Nkolfoulou"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="phone"
            value={number}
            required
            placeholder="Main street Nkolfoulou"
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>
        <Row
          style={{
            justifyContent: "center",
          }}
          className="mb-3"
        >
          {/* <Stack> */}
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              required
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
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
          {/* </Stack> */}
        </Row>
        <div className="mt-3">
          <span>
            Already have an account?{" "}
            <a href="/login" style={{ textDecoration: "none" }}>
              Login
            </a>
          </span>
        </div>
        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="primary" className="mt-5" onClick={handleSubmit}>
            Register
          </Button>
          <Button variant="outline-secondary">Cancel</Button>
        </Stack>
      </Form>
    </Container>
  );
};

export default Register;
