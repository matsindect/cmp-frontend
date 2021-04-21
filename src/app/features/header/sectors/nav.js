import React from "react";
import "./nav.css"
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Row} from "react-bootstrap";
import { CSSTransition } from 'react-transition-group';
import NestedMenu from "./nested-menu";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    zIndex: 9,
  },
  quickLinks: {
    width: "100%",
    height:"100%",
    backgroundColor:"white"
  },
  accounts: {
    marginTop: 10,
    marginBottom: 10,
  },
}));

export default function SimpleContainer({sector}) {
  const classes = useStyles();
  return (
      <CSSTransition
      key={sector._id}
      in={true}
      timeout={1000}
      classNames={"quick-links"}
      >

      <Container className="mt-3">
        <Row className={classes.quickLinks}>
            {/* <img src={sector.picture} alt="" className="thumbnail"/> */}
            <NestedMenu sector={sector} />
        </Row>
      </Container>
   </CSSTransition>
  );
}
