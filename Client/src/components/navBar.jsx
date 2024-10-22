import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const navBar = () => {
    return ( 
    <Navbar bg="lightgreen" className="mb-4" style={{height: "50px"}}>
        <Container>
            <h2>
                <Link to="/" className="text-decoration-none">
                    ChatinTro
                </Link>
            </h2>
        </Container>
    </Navbar>
     );
}
 
export default navBar;