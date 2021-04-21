import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";
import { Grid } from "@material-ui/core";
import SearchBar from "./search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxHeight: 500,
    height: 500,
    background: "white",
    backgroundImage: `url(${"/img/another.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
  menuTool: {
    minHeight: theme.spacing(10),
  },
  appBar: {
    boxShadow: "none",
  },
}));

export default function Searchheader() {
  const classes = useStyles();
  return (
    <div>
      <Container fluid className={classes.root}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "600px" }}
        >
          <SearchBar />
        </Grid>
      </Container>
    </div>
  );
}
