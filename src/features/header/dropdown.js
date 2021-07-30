import React, { useState } from 'react'
import Container from "@material-ui/core/Container";
import { Nav, Row, Col, ListGroup } from "react-bootstrap";
import Navigation from "./sectors/nav";
import { TransitionGroup } from 'react-transition-group';
import sectors from "./sectors/sectors.js"

export const DropdownMenu = ({ label }) => {
    const [sector, setSector] = useState(sectors.sectors[0])

    const nextSector = (newIndex) => {
        setSector(sectors.sectors[newIndex])
    }
    return (
        <div class="dropdownmenu">
            <Nav.Link href="#home" className="dropbtn ">{ label }</Nav.Link>
            <div class="dropdown-content">
                <Container >
                    <Row >
                        <Col sm={3} className="mt-3">
                            <ListGroup defaultActiveKey="#link1" >
                                <ListGroup.Item action href="#" onClick={() => nextSector(0)}>
                                    Materials Supply
                                </ListGroup.Item>
                                <ListGroup.Item action href="#1" onClick={() => nextSector(1)}>
                                    Plant & Equipment
                                </ListGroup.Item>
                                <ListGroup.Item action href="#2" onClick={() => nextSector(2)}>
                                    Manpower Supply
                                </ListGroup.Item>
                                <ListGroup.Item action href="#3" onClick={() => nextSector(3)}>
                                    Construction Courses
                                </ListGroup.Item>
                                <ListGroup.Item action href="#4" onClick={() => nextSector(4)}>
                                    News & Events
                                </ListGroup.Item>
                                <ListGroup.Item action href="#5" onClick={() => nextSector(5)}>
                                    Hardware Supplies
                                </ListGroup.Item>
                                <ListGroup.Item action href="#6" onClick={() => nextSector(6)}>
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
    )
}
