import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";

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
    marginBottom: 10,
  },
}));

export default function HowIWorksindex() {
  const classes = useStyles();
  return (
    <div>
      <Container fluid className={classes.root}>
        <Container>
          <Row className={classes.sectionTitle}>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
