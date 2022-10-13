// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        {/* <Container> */}
        <Navbar.Brand>
          <NavLink to="/">useReducer</NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Features</NavLink>
          <NavLink to="/Erorr">ERROR PAGE</NavLink>
        </Nav>
        {/* </Container> */}
      </Navbar>
    </>
  );
}

export default Header;
