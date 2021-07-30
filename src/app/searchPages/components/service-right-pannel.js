import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Col } from "react-bootstrap";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from './breadcrumbs'
import Listing from "./service-listing"

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));

export default function LeftPannel({business, productCategory, sector}) {
    const classes = useStyles();
    
    return (
            <Col sm={9}>
              <Breadcrumbs business={business} productCategory={productCategory} sector={sector} />
              <Listing business={business} productCategory={productCategory} sector={sector} />
            </Col>
    )
}