import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Navbar, Nav } from "react-bootstrap";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Navbar
          variant="light"
          style={{ padding: "0px", marginBottom: "10px" }}
        >
          <Nav className="mr-auto">
            <div class="dropdown">
              <button class="dropbtn">All Categories</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <Nav.Link href="#home" style={{ paddingLeft: "0px" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </React.Fragment>
  );
}
