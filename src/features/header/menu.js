import React, {useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Navbar, Nav, Row , Col, ListGroup} from "react-bootstrap";
import Navigation from "./sectors/nav";
import { TransitionGroup } from 'react-transition-group';
import sectors from "./sectors/sectors.js"
import Image from "react-bootstrap/Image";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  
  image: {
    width: 180,
    marginTop: 0,
    marginBottom: 0,
    position:"absolute"
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();

  const [sector, setSector] = useState(sectors.sectors[0])

  const nextSector = (newIndex) => {
    setSector(sectors.sectors[newIndex])
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Row>
          <Col sm={3}>
          <Image src="/img/cmp.png" className={classes.image} />
          </Col>
        	<Col sm={9}>
            <Navbar className="mr-auto justify-content-end" inline>
            <Nav>
            <div class="dropdownmenu">
              <Nav.Link href="#home" className="dropbtn ">SERVICE</Nav.Link>
              <div class="dropdown-content">
              <Container >
                <Row >
                  <Col sm={3} className="mt-3">
                  <ListGroup defaultActiveKey="#link1" >
                      <ListGroup.Item action href="#" onMouseOver={() => nextSector(0)}>
                      Materials Supply
                      </ListGroup.Item>
                      <ListGroup.Item action href="#1" onMouseOver={() => nextSector(1)}>
                      Plant & Equipment
                      </ListGroup.Item>
                      <ListGroup.Item action href="#2" onMouseOver={() => nextSector(2)}>
                      Manpower Supply
                      </ListGroup.Item>
                      <ListGroup.Item action href="#3" onMouseOver={() => nextSector(3)}>
                      Construction Courses
                      </ListGroup.Item>
                      <ListGroup.Item action href="#4" onMouseOver={() => nextSector(4)}>
                      News & Events
                      </ListGroup.Item>
                      <ListGroup.Item action href="#5" onMouseOver={() => nextSector(5)}>
                      Hardware Supplies
                      </ListGroup.Item>
                      <ListGroup.Item action href="#6" onMouseOver={() => nextSector(6)}>
                      Project Cost Estimation
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
            <div class="dropdownmenu">
              <Nav.Link href="#home" className="dropbtn">SUPPLIER</Nav.Link>
              <div class="dropdown-content">
              <Container >
                <Row >
                  <Col sm={3} className="mt-3">
                  <ListGroup defaultActiveKey="#link1" >
                      <ListGroup.Item action href="#8" onMouseOver={() => nextSector(8)}>
                      Material Disposal
                      </ListGroup.Item>
                      <ListGroup.Item action href="#9" onMouseOver={() => nextSector(9)}>
                      Contractors
                      </ListGroup.Item>
                      <ListGroup.Item action href="#10" onMouseOver={() => nextSector(10)}>
                      Sub-Contractors
                      </ListGroup.Item>
                      <ListGroup.Item action href="#11" onMouseOver={() => nextSector(11)}>
                      Suppliers
                      </ListGroup.Item>
                      <ListGroup.Item action href="#12" onMouseOver={() => nextSector(12)}>
                      Consultants
                      </ListGroup.Item>
                      <ListGroup.Item action href="#13" onMouseOver={() => nextSector(13)}>
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
            <div class="dropdownmenu">
              <Nav.Link href="#home" className="dropbtn">PRODUCTS</Nav.Link>
              <div class="dropdown-content">
              <Container >
                <Row >
                  <Col sm={3} className="mt-3">
                  <ListGroup defaultActiveKey="#link1" >
                      <ListGroup.Item action href="#" onMouseOver={() => nextSector(0)}>
                      Materials Supply
                      </ListGroup.Item>
                      <ListGroup.Item action href="#1" onMouseOver={() => nextSector(1)}>
                      Plant & Equipment
                      </ListGroup.Item>
                      <ListGroup.Item action href="#2" onMouseOver={() => nextSector(2)}>
                      Manpower Supply
                      </ListGroup.Item>
                      <ListGroup.Item action href="#3" onMouseOver={() => nextSector(3)}>
                      Construction Courses
                      </ListGroup.Item>
                      <ListGroup.Item action href="#4" onMouseOver={() => nextSector(4)}>
                      News & Events
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
            <div class="dropdownmenu">
            <Nav.Link href="#home" style={{ paddingLeft: "0px" }} className="dropbtn">
            ALL CATEGORIES
            </Nav.Link>
              {/* <button class=""></button> */}
              <div class="dropdown-content">
              <Container >
                <Row >
                  <Col sm={3} className="mt-3">
                  <ListGroup defaultActiveKey="#link1" >
                      <ListGroup.Item action href="#" onMouseOver={() => nextSector(0)}>
                      Materials Supply
                      </ListGroup.Item>
                      <ListGroup.Item action href="#1" onMouseOver={() => nextSector(1)}>
                      Plant & Equipment
                      </ListGroup.Item>
                      <ListGroup.Item action href="#2" onMouseOver={() => nextSector(2)}>
                      Manpower Supply
                      </ListGroup.Item>
                      <ListGroup.Item action href="#3" onMouseOver={() => nextSector(3)}>
                      Construction Courses
                      </ListGroup.Item>
                      <ListGroup.Item action href="#4" onMouseOver={() => nextSector(4)}>
                      News & Events
                      </ListGroup.Item>
                      <ListGroup.Item action href="#5" onMouseOver={() => nextSector(5)}>
                      Hardware Supplies
                      </ListGroup.Item>
                      <ListGroup.Item action href="#6" onMouseOver={() => nextSector(6)}>
                      Project Cost Estimation
                      </ListGroup.Item>
                      <ListGroup.Item action href="#7" onMouseOver={() => nextSector(7)}>
                      Temporary Facilites
                      </ListGroup.Item>
                      <ListGroup.Item action href="#8" onMouseOver={() => nextSector(8)}>
                      Material Disposal
                      </ListGroup.Item>
                      <ListGroup.Item action href="#9" onMouseOver={() => nextSector(9)}>
                      Contractors
                      </ListGroup.Item>
                      <ListGroup.Item action href="#10" onMouseOver={() => nextSector(10)}>
                      Sub-Contractors
                      </ListGroup.Item>
                      <ListGroup.Item action href="#11" onMouseOver={() => nextSector(11)}>
                      Suppliers
                      </ListGroup.Item>
                      <ListGroup.Item action href="#12" onMouseOver={() => nextSector(12)}>
                      Consultants
                      </ListGroup.Item>
                      <ListGroup.Item action href="#13" onMouseOver={() => nextSector(13)}>
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
          </Nav>
          </Navbar>
          </Col>
          </Row>
      </Container>
    </React.Fragment>
  );
}
