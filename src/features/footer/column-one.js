import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col, Image } from "react-bootstrap";

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
  image: {
    width: 200,
    marginTop: 10,
    marginBottom: 10,
  },
}));

export default function ColumnOne() {
  const classes = useStyles();
  return (
    <Container>
      <Row xs={1} md={1} lg={1}>
        <Col>
          <Image src="/img/cmp.png" className={classes.image} />
        </Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  );
}
