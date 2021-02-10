import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";
import ColumnOne from "./column-one";
import ColumnTwo from "./column-two";
import ColumnThree from "./column-three";

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
            <Col>
              <ColumnOne />
            </Col>
            <Col>
              <ColumnTwo />
            </Col>
            <Col>
              <ColumnThree />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
