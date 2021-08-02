import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ColumnTwo() {
  return (
    <Container>
      <Row xs={1} md={1} lg={1}>
        <Col>
        <h4 class="footer-header">For Specifiers</h4>
                <ul class="nav nav-pills flex-column offset-1 col-lg-12">
                    <li><a href="/signup">Signup</a></li>
                    <li><a href="/search">Search Products</a></li>
                    <li><a href="/building-product-news">Building Product News</a></li>
                    <li><a href="/building-product-cpds">Building Product CPDs</a></li>
                    <li><a href="/manufacturers">Search Manufacturers</a></li>
                    <li><a href="/categories">Product Categories</a></li>
                    <li><a href="/login">Log In</a></li>
                    <li><a href="https://support.specifiedby.com/article-categories/specifiers/">Support</a></li>
                </ul>
        </Col>
      </Row>
    </Container>
  );
}
