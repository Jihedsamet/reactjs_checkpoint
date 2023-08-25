import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigationbar({ navigation }) {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
     
        <Nav className="me-auto">

          {navigation.map(elm=>
          <Nav.Link >{elm}</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
