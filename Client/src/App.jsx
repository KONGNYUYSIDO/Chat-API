import{ Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/chat.jsx";
import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/navBar.jsx";

function App() {
  return (
    <>
      <NavBar/>
      <Container>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>  
    </>
  );
}

export default App;
