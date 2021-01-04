import "./navStyle.scss";
import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
} from "react-bootstrap";
import logo from "./logo.jpg";
import Icons from "../../components/CartIcon/CartIcon";
import { Link } from "react-router-dom";





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
      <Link to="/">
        <Navbar.Brand>Red Queen</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto flex1">
      
          <NavDropdown title="Products" id="collasible-nav-dropdown">
            <div className="flex">
            
              
              
              
              
            <Link to="/category/maquinas">
              <NavDropdown.Item href="#action/3.1">
                Maquinas y Herramientas
              </NavDropdown.Item>
              </Link>
            </div>
            <Link to="/category/capilar">
            <NavDropdown.Item href="#action/3.2">Capilar
            </NavDropdown.Item>
            </Link>

            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
        <Nav></Nav>
        <Form inline>
          <Icons iconName={"shopping-cart"} />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
