import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardGrid from './cardgrid';

const useStyles = makeStyles((theme) => ({
  main: {
    background: "white",
  },
  container: {
    paddingBottom: theme.spacing(8),
    maxWidth: '80%'
  },
  offeringHeading: {
    paddingTop: '10px',
    marginBottom: '20px',
  },
}));

export default function Supplier() {
  const classes = useStyles();

  const [products, setProducts] = useState([
    {
      id: 1,
      img: "./img/everyday-basics-I8eTuMmxIfo-unsplash.jpg",
      mainText: "Dolor set amet sdsd",
      subText: "Some text",
    },
    {
      id: 2,
      img: "/img/everyday-basics-l8TylWKkjy4-unsplash.jpg",
      mainText: "Dolor set amet sdsd",
      subText: "Some text",
    },
    {
      id: 3,
      img: "./img/everyday-basics-I8eTuMmxIfo-unsplash.jpg",
      mainText: "Dolor set amet sdsd",
      subText: "Some text",
    },
    {
      id: 4,
      img: "/img/everyday-basics-l8TylWKkjy4-unsplash.jpg",
      mainText: "Dolor set amet sdsd",
      subText: "Some text",
    },
    {
      id: 5,
      img: "./img/everyday-basics-I8eTuMmxIfo-unsplash.jpg",
      mainText: "Dolor set amet sdsd",
      subText: "Some text",
    },
    {
      id: 6,
      img: "/img/everyday-basics-l8TylWKkjy4-unsplash.jpg",
      mainText: "Dolor set amet sdsd",
      subText: "Some text",
    },
    {
      id: 7,
      img: "./img/everyday-basics-I8eTuMmxIfo-unsplash.jpg",
      mainText: "Dolor set amet sdsd",
      subText: "Some text",
    },
    {
      id: 8,
      img: "/img/everyday-basics-l8TylWKkjy4-unsplash.jpg",
      mainText: "Dolor set amet sdsd",
      subText: "Some text",
    },
  ]);

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.main}>
        <Container className={classes.container}>
          <div className={classes.offeringHeading}>
            <h3>Product Offering</h3>
          </div>
 
          <Grid container spacing={4}>
            {products.map((product) => (
              <CardGrid product={product} />
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}