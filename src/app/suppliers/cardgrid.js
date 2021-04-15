import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingBottom: theme.spacing(8),
    maxWidth: '85%'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardTopText: {
    fontWeight: '600'
  },
  cardButton: {
    borderRadius: '5em'
  },
  cardButtonRight: {
    borderColor: "#14c720",
  },
  alignItemsAndJustifyContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  offeringHeading: {
    marginBottom: '20px',
  }
}));

const Style = {
  marginTop: '10%',
  marginRight: '20%',
  marginLeft: '20%',
  width: '60%',
  height: 'auto'
};

export default function CardGrid({product}) {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Card className={classes.card}>
                <CardMedia>
                  <Link to="/product"><img src={product.img} style={Style} alt=""/></Link>
                </CardMedia>
                <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2" className={`${classes.alignItemsAndJustifyContent} ${classes.cardTopText}`}>
                    {product.mainText} 
                </Typography>
                <Typography className={classes.alignItemsAndJustifyContent} color="primary">
                  {product.subText} 
                </Typography>
                </CardContent>
                <CardActions className={classes.alignItemsAndJustifyContent}>
                <Button variant="outlined" size="small" color="primary" className={classes.cardButton}>
                    Lorem epsum
                </Button>
                <Button variant="outlined" size="small" color="primary" className={`${classes.cardButton} ${classes.cardButtonRight}`}>
                    Lorem epsum
                </Button>
                </CardActions>
            </Card>
        </Grid>
    </React.Fragment>
  );
}