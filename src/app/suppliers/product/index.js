import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Box, Button, Divider } from '@material-ui/core';
import StarBorderSharpIcon from '@material-ui/icons/StarBorderSharp';

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
  image: {
    // width: 128,
    // height: 128,
    maxWidth: '100%',
    maxHeight: 'auto',
  },
  img: {
    margin: '20px',
    display: 'block',
    maxWidth: '90%',
    maxHeight: '100%',
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
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.contain}>
          <Grid item md={9} container spacing={2} className={classes.cols}>
            <Paper className={classes.paper}>
            <Grid item container spacing={2}>
              <Grid item md={6}>
                <Paper>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src="/img/background.jpg" />
                  </ButtonBase>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item md={3} className={classes.cols}>
            <Paper className={classes.paper}>
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
            </Paper>
          </Grid>
      </Grid>
    </div>
  );
}