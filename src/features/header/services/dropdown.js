import React, { useState } from 'react'
import Container from "@material-ui/core/Container";
import { Nav, Row, Col, ListGroup } from "react-bootstrap";
import Navigation from "../sectors/nav-services";
import { TransitionGroup } from 'react-transition-group';
import { useSelector } from 'react-redux';
import { CircularProgress, Typography } from '@material-ui/core';

export const ServicesDropdownMenu = ({ label, category }) => {
    const [sectors, setSectors] = useState([])
    const [business, setBusiness] = useState()
    const { businesss, isLoading, error } = useSelector(state => state.businesses);
    const [activeLink, setActiveLink] = useState(false)

    const nextSector = (bt) => {
        setSectors(bt.sectors)
        setBusiness(bt)
    }
    return (
        <div className="dropdownmenu">
            <Nav.Link href="#home" className="dropbtn" onMouseEnter={() => setActiveLink(true)} onMouseLeave={() => setActiveLink(false)}>
                <Typography style={{ fontSize: "16px" }}>
                    {label}
                </Typography>
            </Nav.Link>
            <div className="dropdown-content" style={{display: activeLink && "block" }} onMouseEnter={() => setActiveLink(true)} onMouseLeave={() => setActiveLink(false)}>
                {isLoading && (<CircularProgress />)}
                {error && (<h2>{error}</h2>)}
                {!isLoading && (
                    <Container >
                        <Row >
                            <Col sm={3} className="mt-3 mb-3">
                                <ListGroup defaultActiveKey="#link1" >
                                    {businesss && businesss.filter(bt => bt.categories[0] && bt.categories.some(btSome => btSome.name === category.name)).map((btFiltered, index) => {
                                        return (
                                            <ListGroup.Item key={btFiltered.id} action href={"#" + btFiltered.id} onMouseEnter={() => nextSector(btFiltered)}>
                                                <Typography>
                                                    {btFiltered.name}
                                                </Typography>
                                            </ListGroup.Item>
                                        );
                                    })}
                                </ListGroup>
                            </Col>
                            <Col sm={9}>
                                <TransitionGroup >
                                    <Navigation business={business} sectors={sectors} />
                                </TransitionGroup>
                            </Col>
                        </Row>
                    </Container>
                )}
            </div>
        </div>
    )
}
