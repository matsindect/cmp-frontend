import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import { Col, Row } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop:20,
    height:'auto',
    paddingRight:0,
    width:"100%"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  listing:{
    padding:10,
    width:"100%"
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '100%',
    height:'100%'
  },
  button: {
    margin: theme.spacing(1),
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    width:'100%',
    justifyContent: 'flex-end'
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <Row className={classes.listing}>
        <Col sm={4} >
        <CardMedia
        className={classes.cover}
        image="/img/emaar.png"
        title="Live from space album cover"
      />
        </Col>
        <Col sm={8}>
        <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Company name
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Contact email
          </Typography >
          <Typography variant="subtitle1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        </Typography>
        </CardContent>
        <div className={classes.controls}>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<BookmarksIcon />}
      >
        Bookmark
      </Button>
        </div>
      </div>
    
        </Col>
      </Row>
        
     </Card>
  );
}