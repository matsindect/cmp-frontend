import React from "react";
import { Row } from "react-bootstrap";
import { Container } from "semantic-ui-react";
import CauroselGroups from "../../../../features/grouping";
import VerticalLinearStepper from "./components/stepper";
export default function SupplierForm() {
  return (
    <div>
      <CauroselGroups heading={"Browse by products"}/>
      <Row>
        <Container>
            <VerticalLinearStepper />
        </Container>
      </Row>
      
    </div>
  );
}
