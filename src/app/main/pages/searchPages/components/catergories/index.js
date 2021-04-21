import React from "react";
import { Container,Row} from "react-bootstrap";
import Categories from '../catergories/category'
import { makeStyles } from "@material-ui/core/styles";

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
    search: {
      paddingLeft: 10,
      paddingRight: 10,
    },
  }));

export default function Index() {
  const classes = useStyles(); 
  return (
     <Container className="mt-5" >
        <Row >
            <Categories/>
        </Row>
    </Container>
  );
}