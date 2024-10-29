import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function navigationBar() {
  return (
 <div className="ym-nav-bar-main">
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Yasashri Medagedara</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar>
    <main>
        <Outlet />
    </main>
 </div>
  );
}

export default navigationBar;
