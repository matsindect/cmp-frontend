import { makeStyles } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import { Row } from "react-bootstrap";
import { Container } from "semantic-ui-react";
import CauroselGroups from "../../features/grouping";
import Section from "../../features/grouping/components/Section";
import ProductDetails from "./components/product-details";

const useStyles = makeStyles((theme) => ({
  main: {
      background: 'white',
  },
  sectionTitle: {
    marginTop: 10,
    marginLeft: 0,
  },
  container: {
    paddingLeft: 8,
    paddingRight: 8,
  },
}));

export default function Product() {
  const classes = useStyles();

  return (
    <>
      <CauroselGroups heading={"Browse by Sectors"}/>
      <div className={classes.main}>
        <Container className={classes.container}>
          <Row className={classes.sectionTitle}>
            <h4>Product</h4>
          </Row>
          <Fragment>
            <Section>
              <ProductDetails />
            </Section>
          </Fragment>
        </Container>
        <CauroselGroups heading={"Related Products"}/>
        <CauroselGroups />
      </div>
    </>
  );
}
