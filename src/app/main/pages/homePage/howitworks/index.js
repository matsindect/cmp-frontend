import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: 400,
    background: "white",
    marginTop: 10,
    marginBottom: 10,
  },
  menuTool: {
    minHeight: theme.spacing(10),
  },
  sectionTitle: {
    marginTop: 10,
    marginLeft: 20,
  },
}));

export default function HowIWorksindex() {
  const classes = useStyles();
  return (
    <div>
      <Container fluid className={classes.root}>
        <Container>
          <Row >
            <div className={classes.sectionTitle}>
              <h4>Featured Suppliers</h4>
            </div>
          </Row>
          <Row>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
