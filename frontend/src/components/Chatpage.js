import React, { useState } from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";


const Chatpage = () => {
   const [messages, setMessages] = useState([
     { text: "Hello", sender: "user" },
     { text: "Hi there!", sender: "friend" },
   ]);
   const [inputValue, setInputValue] = useState("");

   const handleSend = (e) => {
     e.preventDefault();
     if (inputValue.trim()) {
       setMessages([...messages, { text: inputValue, sender: "user" }]);
       setInputValue(""); // Clear input field
     }
   };
  return (
    <div>
      <Container
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Row style={{ flex: 1 }}>
          <Col>
            <h2 className="text-center">Chat</h2>
            <ListGroup style={{ overflowY: "auto", height: "80%" }}>
              {messages.map((msg, index) => (
                <ListGroup.Item
                  key={index}
                  className={msg.sender === "user" ? "text-end" : ""}
                >
                  {msg.text}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={handleSend}>
              <Form.Group controlId="formBasicMessage">
                <Form.Control
                  type="text"
                  placeholder="Type a message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Chatpage;
