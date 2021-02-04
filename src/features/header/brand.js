import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Image from "react-bootstrap/Image";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    zIndex: 9,
  },
  image: {
    width: 200,
    marginTop: 10,
    marginBottom: 10,
  },
  accounts: {
    marginTop: 10,
    marginBottom: 10,
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Row>
          <Col>
            <Image src="/img/cmp.png" className={classes.image} />
          </Col>
          {/* <Col md="auto">Variable width content</Col> */}
          <Col xs lg="3" className={classes.accounts}>
            <Grid align-items-xs-center justify-xs-flex-end>
              <Button>Contact us</Button>
              <Button>Login</Button>
              <Button>Register</Button>
            </Grid>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
