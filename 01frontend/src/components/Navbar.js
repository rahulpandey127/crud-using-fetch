import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Registration from "./Registration";
import { NavLink } from "react-router-dom";
const NavbarComp = () => {
  return (
    <div className="mt-3">
      <div>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Express Tutorials</Navbar.Brand>
            <Nav className="me-auto">
              <NavLink to={"/"} className="nav-link">Home</NavLink>
              {/* <NavLink to={"/users"}  className="nav-link">Users</NavLink> */}
              <NavLink to={"/profile"}  className="nav-link">Profile</NavLink>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div>
        <Registration />
      </div>
    </div>
  );
};

export default NavbarComp;
