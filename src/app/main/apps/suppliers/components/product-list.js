import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Row } from 'react-bootstrap';
import { Container } from 'semantic-ui-react';
import ProductCard from './product-card';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: "white",
    },
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
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

export default function ProductList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container className="pt-5 pb-5" >
            <Row>
                <Typography gutterBottom variant="h5" component="h2">
                    Product Offering
                </Typography>
                <Grid container spacing={3}>
                {cards.map((card) => (
                    <ProductCard card={card} />
                ))}
                </Grid>
            </Row>
        </Container>
    </div>
  );
}
