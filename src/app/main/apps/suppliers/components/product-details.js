import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Divider, Paper, Typography } from '@material-ui/core';
import ProductCarousel from './product-carousel';
import StarBorderSharpIcon from '@material-ui/icons/StarBorderSharp';
import CustomButton from './button';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '0',
  },
  colLeft: {
    paddingLeft: '0 !important',
  },
  colRight: {
    paddingLeft: '0 !important',
    paddingRight: '26px !important',
  },
  img: {
    maxHeight: '150px',
    width: 'auto',
    margin: '20px auto 0',
    display: 'flex',
  },
  imgBox: {
    margin: theme.spacing(2),
    marginRight: '0'
  },
  textBox: {
    marginRight: theme.spacing(2),
  },
  btnContainer: {
    paddingTop: theme.spacing(1),
  },
}));

export default function ProductDetails() {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={10} className={classes.colLeft}>
          <Paper style={{marginLeft: '20px'}} className={classes.paper}>
            <Grid item container spacing={3} direction="row" justify="flex-start" alignItems="center">
              <Grid item xs={6}>
                <Paper className={classes.imgBox}>
                  <ProductCarousel />
                </Paper>
              </Grid>
              <Grid item xs={6} style={{marginTop: '0'}}>
                <Box className={classes.textBox}>
                  <Typography variant="h4">
                    Modular Glass Rooflights Jet Cox Moduglass
                  </Typography>
                  <Typography variant="body2" gutterBottom color="primary">
                    by Resolution
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={2} style={{paddingTop: '0'}} className={classes.colRight}>
          <Paper style={{marginLeft: '5px', marginRight: '-2px'}} className={classes.paper}>
            <Box textAlign="center" style={{margin: '0 10px'}}>
              <div className={classes.btnContainer}>
                <Typography variant="p" gutterBottom color="primary">
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
              </div>
              <div className={classes.btnContainer}>
                <CustomButton text='Lorem ipsum dolor' color="primary" variant='contained' />
              </div>
              <div className={classes.btnContainer}>
                <CustomButton text='Lorem ipsum dolor' color="orange" variant='outlined' />
              </div>
              <div className={classes.btnContainer}>
                <span style={{paddingRight: '10px'}}>
                  <CustomButton text='Lorem' color="green" variant='outlined' />
                </span>
                <span>
                  <CustomButton text='Set' variant='outlined' />
                </span>
              </div>
              <div className={classes.btnContainer}>
                <CustomButton text='Lorem ipsum dolor' color="primary" variant='outlined' />
              </div>
              <div className={classes.btnContainer}>
                <Divider />
              </div>
              <Typography variant="h5" gutterBottom>
                <Box fontWeight="fontWeightBold">
                  Dolo sit amet
                </Box>
              </Typography>
              <div className={classes.btnContainer}>
                <CustomButton text='Lorem ipsum dolor' color="green" variant='outlined' />
              </div>
              <div className={classes.btnContainer} style={{paddingBottom: '20px'}}>
                <Typography variant="p" gutterBottom color='primary'>
                    Dolo sit amet
                </Typography>
              </div>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
