import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Col } from "react-bootstrap";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '../components/breadcrumbs'
import Listing from "../components/listing"

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));

export default function LeftPannel() {
    const classes = useStyles();
    
    return (
            <Col sm={9}>
              <Breadcrumbs />
              <Listing />
            </Col>
    )
}