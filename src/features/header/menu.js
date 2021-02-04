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
            <Nav.Link href="#home" style={{ paddingLeft: "0px" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#features">Materials Supply</Nav.Link>
            <Nav.Link href="#pricing">Plant & Equipment</Nav.Link>
            <Nav.Link href="#home">Manpower Supply</Nav.Link>
            <Nav.Link href="#features">Construction Courses</Nav.Link>
            <Nav.Link href="#pricing">News & Events</Nav.Link>
            <Nav.Link href="#home">Hardware Supplies</Nav.Link>
            <Nav.Link href="#features">Project Cost Estimation</Nav.Link>
            <Nav.Link href="#pricing">Temporary Facilites</Nav.Link>
            <Nav.Link href="#pricing">Material Disposal</Nav.Link>
            <Nav.Link href="#pricing">Contractors</Nav.Link>
            <Nav.Link href="#pricing">Sub-Contractors</Nav.Link>
            <Nav.Link href="#pricing">Suppliers</Nav.Link>
            <Nav.Link href="#pricing">Consultants</Nav.Link>
            <Nav.Link href="#pricing">Specialist Services</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </React.Fragment>
  );
}
