import React from "react";
import { Container,Row} from "react-bootstrap";
import LeftPanel from '../components/left-pannel'
import RightPanel from "./service-right-pannel"

export default function Wrapper({business, productCategory, sector}) {
  return (
     <Container className="mt-5" >
        <Row >
            <LeftPanel productCategory={productCategory} />
            <RightPanel business={business} productCategory={productCategory} sector={sector}/>
        </Row>
    </Container>
  );
}