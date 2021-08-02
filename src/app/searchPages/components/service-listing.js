import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 20,
    height: '250px',
    paddingRight: 0,
    width: "100%"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  listing: {
    padding: 10,
    width: "100%"
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '100%',
    height: '100%'
  },
  button: {
    margin: theme.spacing(1),
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    width: '100%',
    justifyContent: 'flex-end'
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  customBox: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 2,
    wordBreak: "break-all",
    overflow: "hidden"
  }
}));

export default function MediaControlCard({ business, productCategory, sector }) {
  const classes = useStyles();
  const { services } = useSelector(state => state.services);

  if (!business) {
    return <h2>...</h2>
  }

  return (
    <>
      {services && services.filter(p => p.business_types.some(bt => bt.name === business.name) 
      && p.sectors.some(s => s.name === sector.name)
      && p.service_categories.some(pc => pc.name === productCategory.name)).slice(0, 22).map((product) => {
          return (
            <Card className={classes.root}>
              <Row className={classes.listing}>
                <Col sm={4} >
                  <CardMedia
                    className={classes.cover}
                    image={product.images[0] ? product.images[0].url : "/img/default1"}
                    title="Live from space album cover"
                  />
                </Col>
                <Col sm={8}>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        {product.service_name}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {product.service_attributes.map((attrr) => {
                          return (
                            <span>{attrr.name + ", "}</span>
                          );
                        })}
                      </Typography >
                      <Box
                        component="div"
                        classes={{ root: classes.customBox }}
                      >
                        <Typography variant="subtitle1">
                          {product.description}
                        </Typography>
                      </Box>
                    </CardContent>
                    <div className={classes.controls}>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<BookmarksIcon />}
                      >
                        More Info
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          );
        })}
    </>
  );
}