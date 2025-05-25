import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
  Stack,
} from "react-bootstrap";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

function NavBarComp() {
  // fixed-top
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary fluid
      //fixed-top"
      >
        <Container>
          <Navbar.Brand href="/home">
            <img
              src={logo}
              alt="logo"
              style={{
                height: "3.5rem",
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/home">
                HOME
              </Link>
              <Link className="nav-link" to="/about" href="/about">
                ABOUT US
              </Link>
              <Link className="nav-link" to="/contact">
                CONTACT US
              </Link>
              <Link className="nav-link" to="/products">
                PRODUCTS
              </Link>
              <Link className="nav-link" to="/photos">
                PHOTO GALLERY
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarComp;
