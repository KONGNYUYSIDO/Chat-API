import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register.js";
import Chatpage from "./components/Chatpage.js";
import "./App.css";
import Login from "./components/Login.js";
import Homepage from "./Pages/homepage.js";

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chats" element={<Chatpage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
