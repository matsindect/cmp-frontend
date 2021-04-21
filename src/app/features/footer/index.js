import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css"
import ColumnOne from "./column-one";
import ColumnTwo from "./column-two";
import ColumnThree from "./column-three";
import ColumnFour from "./column-four";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: 400,
    background: "#0e1e2a",
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
        <Container className="mt-5 pt-5 footer">
          <Row className={classes.sectionTitle}>
            <Col>
              <ColumnOne />
            </Col>
            <Col>
              <ColumnFour />
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
