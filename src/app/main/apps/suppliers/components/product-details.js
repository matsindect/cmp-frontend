import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Collapse, Divider, Paper, Typography } from '@material-ui/core';
import ProductCarousel from './product-carousel';
import StarBorderSharpIcon from '@material-ui/icons/StarBorderSharp';
import CustomButton from './button';
import clsx from 'clsx';
import SpanningTable from './table';
import TransitionAlerts from './close-open-action';
import { Bookmark, Call, CompareOutlined, FlashOnOutlined } from '@material-ui/icons';

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
  expand: {
    // transform: 'rotate(0deg)',
    marginLeft: '0',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    // transform: 'rotate(180deg)',
  },
  img: {
    maxHeight: '150px',
    width: 'auto',
    margin: '20px auto 0',
    display: 'flex',
  },
  imgBox: {
    margin: theme.spacing(2),
    marginRight: '0',
  },
  textBox: {
    marginRight: theme.spacing(2),
  },
  btnContainer: {
    paddingTop: theme.spacing(1),
  },
}));

const sizeWeight = [
  {
    col1: 'Depth ?',
    col2: '35 mm',
  },
  {
    col1: 'Widht ?',
    col2: '44 mm',
  },
  {
    col1: 'Heght ?',
    col2: '50 mm',
  },
  {
    col1: 'Net Weight ?',
    col2: '35 mm',
  }
]

const certs = [
  {
    col1: 'CE Marking (?)',
    col2: 'Yes',
  },
  {
    col1: 'Certifications (?)',
    col2: 'BSI',
  },
]

const tech = [
  {
    col1: 'Noise Rating (Achievable) (?)',
    col2: '85 dB',
  },
  {
    col1: 'Temperature (?)',
    col2: ' -10 - 40 °C ',
  },
]


const other = [
  {
    col1: 'Typical Building Sector (?)',
    col2: 'Domestic',
  },
]

export default function ProductDetails() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [display, setDisplay] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setDisplay(!display);
  };
 
  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={10} className={classes.colLeft}>
          <Box boxShadow={3} borderRadius={5} style={{marginLeft: '20px'}} className={classes.paper}>
            <Grid item container spacing={3} direction="row" justify="flex-start" alignItems="center">
              <Grid item xs={7}>
                <Paper className={classes.imgBox}>
                  <ProductCarousel />
                </Paper>
                <Typography gutterTop gutterBottom variant="p">
                  <Box textAlign='center' fontSize='14px'>
                    Click image to open expanded view 
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={5} style={{marginTop: '0'}}>
                <Box className={classes.textBox}>
                  <Typography variant="h4">
                    CO-9X-10-FF - Carbon Monoxide Alarm - 10 Year Life
                  </Typography>
                  <Typography variant="body2" gutterBottom color="primary">
                    <Box fontSize='14px'>
                      by Resolution
                    </Box>
                  </Typography>
                  <Typography variant="body2" fontSize='14px' paragraph>
                    <Box fontSize='14px'>
                      Carbon monoxide detector providing early warning of the presence of 
                      CO in your home through alarm and LED display
                    </Box>
                  </Typography>

                   <Typography variant="body2" fontSize='14px' paragraph>
                      <Box fontSize='14px'>
                        An internal power pack will power the alarm for 10 years in 
                        normal operating conditions, so there's no need 
                        to replace any batteries
                      </Box>
                   </Typography>
                   
                   <Typography variant="body2" fontSize='14px' paragraph>
                      <Box fontSize='14px'>
                        A test & reset button makes weekly testing easy
                      </Box>
                   </Typography>

                   <Typography variant="body2" fontSize='14px' paragraph>
                      <Box fontSize='14px'>
                        Automatic self diagnostic check
                      </Box>
                   </Typography>

                   <Typography variant="body2" fontSize='14px' paragraph>
                      <Box fontSize='14px'>
                        Triple LED display shows power, fault and alarm
                      </Box>
                   </Typography>

                   <Typography variant="body2" fontSize='14px' paragraph style={expanded ? {display:'none'} : {}}>
                      <Box fontSize='14px'>
                        <Button
                          className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                          })}
                          onClick={handleExpandClick}
                          aria-expanded={expanded}
                          aria-label="show more"
                          style={{padding: '0'}}
                          color='primary'
                        >
                        Read More
                      </Button>
                      </Box>
                   </Typography>

                   <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                      </Typography>
                      <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                      </Typography>
                      <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                      </Typography>
                      <Typography paragraph>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                        <Button
                          className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                          })}
                          onClick={handleExpandClick}
                          aria-expanded={expanded}
                          aria-label="show more"
                          style={{padding: '0', justifyContent: 'left'}}
                          color='primary'
                        >
                        Close
                      </Button>
                  </Collapse>
                </Box>
              </Grid>
              <Grid item xs={12} container spacing={3} style={{margin: '0', padding: '16px'}}>
                <Grid item xs={12} >
                  <Typography variant="body2">
                      <Box fontSize='16px' textAlign="center">
                        Specification Details for CO-9X-10-FF - Carbon Monoxide Alarm - 10 Year Life (Fire Detectors)
                      </Box>
                  </Typography>
                </Grid>
                <Grid item md={6} >
                  <SpanningTable heading="Certifications & Ratings" attr={certs} />
                </Grid>
                <Grid item md={6} >
                  <SpanningTable heading="Technical" attr={tech} />
                </Grid>
                <Grid item md={6} >
                  <SpanningTable heading="Size & Weight" attr={sizeWeight} />
                </Grid>
                <Grid item md={6} >
                  <SpanningTable heading="Other" attr={other} />
                </Grid>
                <Grid item xs={12} >
                      <Box fontSize='16px' textAlign="center">
                        <CustomButton text='Download datasheet' color="primary" variant='contained' />
                      </Box>
                </Grid>
                <Grid item xs={12} >
                  <TransitionAlerts />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={2} style={{paddingTop: '0'}} className={classes.colRight}>
          <Box boxShadow={3} borderRadius={5} style={{marginLeft: '5px', marginRight: '-2px'}} className={classes.paper}>
            <Box textAlign="center" style={{margin: '0 10px'}} fontSize="16px">
              <div className={classes.btnContainer}>
              
                <img style={{paddingTop: '20px'}} src="/img/fire-angel-logo.png" alt="logo" />
                <Typography variant="p" gutterBottom color="primary">
                  Fire Angel
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <StarBorderSharpIcon style={{color: 'orange'}}></StarBorderSharpIcon>
                  <StarBorderSharpIcon style={{color: 'orange'}}></StarBorderSharpIcon>
                  <StarBorderSharpIcon style={{color: 'orange'}}></StarBorderSharpIcon>
                  <StarBorderSharpIcon style={{color: 'orange'}}></StarBorderSharpIcon>
                  <StarBorderSharpIcon style={{color: 'orange'}}></StarBorderSharpIcon>
                </Typography>
                <Divider className={classes.divider}/>
              </div>
              <Box className={classes.btnContainer}>
                <CustomButton text='Download pack' color="primary" variant='contained' width='100%' />
              </Box>
              <Box className={classes.btnContainer}>
                <CustomButton text='Request call' color="orange" variant='outlined' width='100%' startIcon={<Call />} />
              </Box>
              <Box className={classes.btnContainer}>
                <span style={{paddingRight: '5px'}}>
                  <CustomButton text='Lorem' color="green" width='50%' variant='outlined' />
                </span>
                <span>
                  <CustomButton text='Note' color="#414141" variant='outlined' width='25%' />
                </span>
              </Box>
              <Box className={classes.btnContainer}>
                <CustomButton text='Compare' color="#3f51b5" variant='outlined' width='100%' startIcon={<CompareOutlined />} />
              </Box>
              <Box className={classes.btnContainer}>
                <Divider />
              </Box>
              <Box className={classes.btnContainer}>
                <CustomButton text='Instant price' color="green" variant='outlined' width='100%' startIcon={<FlashOnOutlined />} />
              </Box>
              <Box className={classes.btnContainer} style={{paddingBottom: '20px', fontSize: '12px'}}>
                <Typography variant="p" gutterBottom color='primary'>
                    Or, Ask a Question
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
