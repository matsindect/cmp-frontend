import React from "react";
import { Container,Row} from "react-bootstrap";
import Categories from '../catergories/category'

export default function Index() {
  return (
     <Container className="mt-5" >
        <Row >
            <Categories/>
        </Row>
    </Container>
  );
}