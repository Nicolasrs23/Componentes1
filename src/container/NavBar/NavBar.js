import "./navStyle.scss";
import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "./logo.jpg";
import Icons from "../../components/CartIcon/CartIcon";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />

      <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto flex1">
          <Nav.Link href="#features">Sing Up</Nav.Link>
          <Nav.Link href="#pricing">Contact Us</Nav.Link>
          <NavDropdown title="Products" id="collasible-nav-dropdown">
            <div className="flex">
              <NavDropdown.Item href="#action/3.1">
                {" "}
                My Products{" "}
              </NavDropdown.Item>{" "}
            </div>
            <NavDropdown.Item href="#action/3.2">Favorits</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Tracking orders
            </NavDropdown.Item>

            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
        <Nav></Nav>
        <Form inline>
          <Icons iconName={"shopping-cart"} />
          <FormControl
            type="text"
            placeholder="Search your products!!"
            className="mr-sm-2"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
