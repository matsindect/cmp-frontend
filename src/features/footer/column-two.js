import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ColumnThree() {
  return (
    <Container>
      <Row xs={1} md={1} lg={1}>
        <Col>
        <h4 class="footer-header">For Manufacturers</h4>
                <ul class="nav nav-pills flex-column offset-1 col-lg-12">
                    <li><a href="https://manufacturers.specifiedby.com/">List your products</a></li>
                    <li><a href="https://app.hubspot.com/meetings/darren9/specifiedby-demo-website" rel="noreferrer" target="_blank">Book a Demo</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="https://insights.specifiedby.com/" rel="noreferrer" target="_blank">Specifier Insights Blog</a></li>
                    <li><a href="/login">Log In</a></li>
                    <li><a href="https://support.specifiedby.com/article-categories/building-product-manufacturers/">Support</a></li>
                </ul>
        </Col>
      </Row>
    </Container>
  );
}
