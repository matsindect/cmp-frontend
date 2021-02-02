import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Image from "react-bootstrap/Image";
import { makeStyles } from "@material-ui/core/styles";

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
}));

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Image src="/img/cmp.png" className={classes.image} />
      </Container>
    </React.Fragment>
  );
}
