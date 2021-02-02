import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: 400,
    background: "white",
  },
  menuTool: {
    minHeight: theme.spacing(10),
  },
  appBar: {
    boxShadow: "none",
  },
}));

export default function HowIWorksindex() {
  const classes = useStyles();
  return (
    <div>
      <Container fluid className={classes.root}></Container>
    </div>
  );
}
