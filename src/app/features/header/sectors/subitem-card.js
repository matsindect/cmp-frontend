import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { ButtonBase } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: 'none',
        boxShadow: "none",
    },
    cardMedia: {
        paddingTop: '0', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    cardImage: { 
        maxHeight: '40px',
        width: 'auto',
        margin: '10px auto 0',
        display: 'flex'
    },
}));

export default function SubItemCard({sector}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia className={classes.cardMedia}>
            <img className={classes.cardImage} src={sector.picture} alt="title"/>
        </CardMedia>
        <CardContent className={classes.cardContent}>
            <Typography variant="p" align="center" fontSize="14px">
                Describe the content
            </Typography>
        </CardContent>
    </Card>
  );
}
