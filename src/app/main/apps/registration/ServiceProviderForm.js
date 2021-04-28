import React from "react";
import { Row } from "react-bootstrap";
import { Container } from "semantic-ui-react";
import CauroselGroups from "../../../features/grouping";
import VerticalLinearStepper from "./components/stepper";
export default function ServiceProviderForm() {
  return (
    <div>
      <CauroselGroups heading={"Browse by products"}/>
      <Row>
        <Container style={{background: "white", paddingRight: "0px", paddingLeft: "30px"}}>
          <Container style={{background: "#f5f5f5", width: "100%"}}>
            <Container style={{width: "100%", paddingTop: "30px", paddingBottom: "30px"}}>
                <VerticalLinearStepper />
            </Container>
          </Container>
        </Container>
      </Row>
      
    </div>
  );
}
