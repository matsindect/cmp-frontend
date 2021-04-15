import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Box, Button, Divider } from '@material-ui/core';
import StarBorderSharpIcon from '@material-ui/icons/StarBorderSharp';
import ProductImage from './components/ProductImage';
import RelatedProducts from './components/RelatedProducts';
import Table1 from './components/Table1';
import { shadows } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    background: "white",
    padding: '20px',
  },
  paper: {
    padding: theme.spacing(2),
    // margin: 'auto',
    // maxWidth: 900,
  },
  contain: {
    margin: 'auto',
    width: '83%',
  },
  cols: {
    marginTop: '0',
    marginLeft: '0',
    paddingTop: '0',
    paddingLeft: '0',
  },
  divider: {
    marginTop: '15px',
    marginBottom: '15px',
  },
  cardButton: {
    borderRadius: '5em'
  },
  btnContainer: {
    paddingBottom: '15px'
  },
  btnLeft: {
    paddingRight: '15px'
  },
  sectionTitle: {
    marginLeft: 0,
  },
  tableRight: {
    paddingRight: theme.spacing(2),
  },
  textBox: {
    backgroundColor: '#add8e6',
  },
  textBoxContent: {
    padding: theme.spacing(2),
  },
  btnGroup: {
    paddingTop: theme.spacing(2),
  },
  btn: {
    borderRadius: '5em',
    borderColor: 'grey',
  },
  span: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(2),
  }
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.contain}>
          <Grid item container className={classes.sectionTitle}>
            <h4>Product</h4>
          </Grid>
          <Grid item md={9} container spacing={2} className={classes.cols}>
            <Box className={classes.paper} boxShadow={3} borderRadius={4}>
              <Grid item container spacing={2}>
                <Grid item md={6}>
                  <Paper>
                    <ProductImage />
                  </Paper>
                </Grid>
                <Grid item md={6}>
                  <Grid item xs spacing={2}>
                    <Grid item xs>
                      <Typography variant="h4">
                        Modular Glass Rooflights Jet Cox Moduglass
                      </Typography>
                      <Typography variant="body2" gutterBottom color="primary">
                        by Resolution
                      </Typography>
                      <Typography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item container className={classes.sectionTitle}>
                  <Grid item md={6} className={classes.tableRight}>
                    <Table1 />
                  </Grid>
                  <Grid item md={6}>
                    <Table1 />
                  </Grid>
                </Grid>
                <Grid item container className={classes.sectionTitle}>
                  <Box className={classes.textBox} boxShadow={1} borderRadius={4}>
                    <Typography variant="body2" className={classes.textBoxContent}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                  </Box>
                  <Box className={classes.btnGroup}>
                    <Box textAlign='center'>
                      <Typography variant="body2" className={classes.textBoxContent}>
                        <Box fontWeight="fontWeightBold">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet.
                        </Box>
                      </Typography>
                    </Box>
                    <span className={classes.span}>
                      <Button className={classes.btn} variant="outlined">
                        Lorem
                      </Button>
                    </span>
                    <span className={classes.span}>
                      <Button className={classes.btn} variant="outlined">
                        Lorem
                      </Button>
                    </span>
                    <span className={classes.span}>
                      <Button className={classes.btn} variant="outlined">
                        Lor
                      </Button>
                    </span>
                    <span className={classes.span}>
                      <Button className={classes.btn} variant="outlined">
                        Lorem
                      </Button>
                    </span>
                    <span className={classes.span}>
                      <Button className={classes.btn} variant="outlined">
                        Lorem Epsum
                      </Button>
                    </span>
                    <span className={classes.span}>
                      <Button className={classes.btn} variant="outlined">
                        Lorem
                      </Button>
                    </span>
                    <span className={classes.span}>
                      <Button className={classes.btn} variant="outlined">
                        Set
                      </Button>
                    </span>
                    <span className={classes.span}>
                      <Button className={classes.btn} variant="outlined">
                        Lorem
                      </Button>
                    </span>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={3} className={classes.cols}>
            <Box className={classes.paper} boxShadow={3} borderRadius={4}>
              <Box textAlign="center">
                <Typography variant="h5" gutterBottom color="primary">
                    Lorem
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <StarBorderSharpIcon></StarBorderSharpIcon>
                  <StarBorderSharpIcon></StarBorderSharpIcon>
                  <StarBorderSharpIcon></StarBorderSharpIcon>
                  <StarBorderSharpIcon></StarBorderSharpIcon>
                  <StarBorderSharpIcon></StarBorderSharpIcon>
                </Typography>
                <Divider className={classes.divider}/>
                <div className={classes.btnContainer}>
                  <Button className={classes.cardButton} variant="contained" color="primary">
                    Lorem ipsum dolo
                  </Button>
                </div>
                <div className={classes.btnContainer}>
                  <Button className={classes.cardButton} variant="outlined" color="secondary">
                    Lorem ipsum dolo
                  </Button>
                </div>
                <div className={classes.btnContainer}>
                  <span className={classes.btnLeft}>
                    <Button className={classes.cardButton} variant="outlined" color="secondary">
                      Lorem
                    </Button>
                  </span>
                  <span>
                    <Button className={classes.cardButton} variant="outlined" color="green">
                      Lorm
                    </Button>
                  </span>
                </div>
                <div>
                  <Button className={classes.cardButton} variant="outlined" color="primary">
                    Lorem ipsum dolo
                  </Button>
                </div>
                <Divider className={classes.divider}/>
                <Typography variant="h5" gutterBottom>
                  <Box fontWeight="fontWeightBold">
                    Dolo sit amet
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Grid>
      </Grid>
      <RelatedProducts />
    </div>
    
  );
}