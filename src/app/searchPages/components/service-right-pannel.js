import React from 'react';
import { Col } from "react-bootstrap";
import Breadcrumbs from './breadcrumbs'
import Listing from "./service-listing"

export default function LeftPannel({ business, productCategory, sector }) {
  return (
    <Col sm={9}>
      <Breadcrumbs business={business} productCategory={productCategory} sector={sector} />
      <Listing business={business} productCategory={productCategory} sector={sector} />
    </Col>
  )
}