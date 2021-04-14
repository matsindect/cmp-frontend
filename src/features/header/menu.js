import React, {useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Navbar, Nav, Row , Col, ListGroup} from "react-bootstrap";
import Navigation from "./sectors/nav";
import { TransitionGroup } from 'react-transition-group';
import sectors from "./sectors/sectors.js"
export default function SimpleContainer() {
  const [sector, setSector] = useState(sectors.sectors[0])

  const nextSector = () => {
    const newIndex = sector.index+1;
    setSector(sectors.sectors[newIndex])
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Navbar
          variant="light"
          style={{ padding: "0px", marginBottom: "10px" }}
        >
          <Nav className="mr-auto">
            <div class="dropdownmenu">
            <Nav.Link href="#home" style={{ paddingLeft: "0px" }} className="dropbtn">
            All Categories
            </Nav.Link>
              {/* <button class=""></button> */}
              <div class="dropdown-content">
              <Container >
                <Row >
                  <Col sm={3} className="mt-3">
                  <ListGroup defaultActiveKey="#link1" >
                      <ListGroup.Item action onClick={() => nextSector()}>
                      Materials Supply
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2" disabled>
                      Plant & Equipment
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2" disabled>
                      Manpower Supply
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2" disabled>
                      Construction Courses
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2" disabled>
                      News & Events
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2" disabled>
                      Hardware Supplies
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2" disabled>
                      Project Cost Estimation
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2" disabled>
                      Temporary Facilites
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2" disabled>
                      Material Disposal
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2" disabled>
                      Contractors
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2" disabled>
                      Sub-Contractors
                      </ListGroup.Item>
                      <ListGroup.Item action href="/suppliers">
                      Suppliers
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2" disabled>
                      Consultants
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2" disabled>
                      Specialist Services
                      </ListGroup.Item>
                    </ListGroup>,
                  </Col>
                  <Col sm={9}>
                    <TransitionGroup >
                      <Navigation sector={sector} />
                    </TransitionGroup>
                  </Col>
                </Row>
              </Container>
              </div>
            </div>
            <Nav.Link href="#home" style={{ paddingLeft: "0px" }}>
              Home
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </React.Fragment>
  );
}
