import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ColumnOne() {
  return (
    <Container>
      <Row xs={1} md={1} lg={1} >
        <Col>
        <h4 class="footer-header">SpecifiedBy</h4>
                <ul class="nav nav-pills flex-column offset-1 col-lg-12">
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://specifiedby.recruiterbox.com/">Careers</a></li>
                    <li><a href="/terms-of-service">User Terms &amp; Conditions</a></li>
                    <li><a href="/manufacturer-terms-of-service">Manufacturer Terms &amp; Conditions</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/cookies-policy">Cookies Policy</a></li>
                    <li><a href="/sitemap">Sitemap</a></li>
                </ul>
        </Col>
      </Row>
    </Container>
  );
}
