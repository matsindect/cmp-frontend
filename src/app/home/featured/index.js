import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";
import FeaturedGrid from "./featuredgrid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: 400,
    marginTop: 10,
    marginBottom: 10,
  },
  menuTool: {
    minHeight: theme.spacing(10),
  },
  sectionTitle: {
    marginTop: 10,
    marginBottom: 10,
  },
}));

export default function HowIWorksindex() {
  const classes = useStyles();
  return (
    <div>
      <Container fluid className={classes.root}>
        <Container>
          <Row className="justify-content-md-center">
            <div className={classes.sectionTitle}>
              <h4>Suppliers</h4>
            </div>
          </Row>
          <Row>
            <Col>
              <FeaturedGrid />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
