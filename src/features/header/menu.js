import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { ServicesDropdownMenu } from "./services/dropdown";
import { ProductsDropdownMenu } from "./products/dropdown";

const useStyles = makeStyles((theme) => ({
  image: {
      width: 180,
      marginTop: 0,
      marginBottom: 0,
      position: "absolute"
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();
  const { categories, isLoading, error } = useSelector(state => state.categories);

  if (isLoading) return <h3>Loading ...</h3>;
	if (error) return <h3>{error}</h3>;
  
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
                <ServicesDropdownMenu label="SERVICES" category={categories[2]} />
                <ServicesDropdownMenu label="SERVICE PROVIDERS" category={categories[2]} />
                <ProductsDropdownMenu label="PRODUCTS" category={categories[1]} />
                <ProductsDropdownMenu label="SUPPLIERS" category={categories[1]}/>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
