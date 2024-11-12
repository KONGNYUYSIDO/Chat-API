import React from "react";
import { Button, Col, Container, Image, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const homepage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-left vh-105">
      <Row className="text-center">
        <Col md={12}>
          <Image
            src="/chatintro-high-resolution-logo-transparent.png"
            roundedCircle
            style={{ width: "400px", height: "400px" }}
          />
          <h1> Welcome to ChatinTro Web! </h1>
          <p> To use ChatinTro on your computer:</p>
        </Col>
        <Col
          md={4}
          className="d-flex flex-column align-items-left "
          style={{ height: "40%" }}
        >
          <Stack gap={2} className="col-md-5 mx-auto">
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button variant="primary" size="lg" className="mb-3 ">
                Login
              </Button>
            </Link>

            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button variant="outline-secondary" size="lg">
                Signup
              </Button>
            </Link>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default homepage;
