import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import CustomButton from './button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '0', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    cardImage: {
        maxHeight: '150px',
        width: 'auto',
        margin: '20px auto 0',
        display: 'flex'
    },
}));


export default function ProductCard({card}) {
  const classes = useStyles();

  return (
    <Grid item key={card} xs={12} sm={6} md={3}>
        <Card className={classes.card}>
            <CardMedia className={classes.cardMedia}>
                <Link to="/product">
                    <img className={classes.cardImage} src="/img/Fire-Angel_CO-9X-10-FF_Images_Image01.png" alt="title"/>
                </Link>
            </CardMedia>
            <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2" align="center">
                        <Box fontWeight="bold">
                            Section to describe the content.
                        </Box>
                    </Typography>
                    <Typography align="center" color="primary">
                        Other text
                    </Typography>
            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                <CustomButton text="Secondary" variant="outlined" color="#3f51b5" />
                <CustomButton text="Primary" variant="outlined" color="green" />
            </CardActions>
        </Card>
    </Grid>
  );
}
