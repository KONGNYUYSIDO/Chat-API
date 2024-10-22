import { Alert, Button, Col, Form, Row, Stack } from "react-bootstrap";

const register = () => {
    return ( 
    <Form>
        <Row style={{height: "100vh", justifyContent: "center", paddingTop: "10%"}} className="mb-3">
            {/* <Stack> */}
                <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>FirstName</Form.Label>
                    <Form.Control type="text" placeholder="firstname"/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>LastName</Form.Label>
                    <Form.Control type="text" placeholder="lastname"/>
                </Form.Group>
            {/* </Stack> */}
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress">
            <Form.Label>UserName</Form.Label>
            <Form.Control placeholder="Main street Nkolfoulou"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control placeholder="Main street Nkolfoulou"/>
        </Form.Group>
        <Row style={{height: "100vh", justifyContent: "center", paddingTop: "10%"}} className="mb-3">
            {/* <Stack> */}
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="example@gmail.com"/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password"/>
                </Form.Group>
            {/* </Stack> */}
        </Row>
    </Form> 
    );
}
 
export default register;