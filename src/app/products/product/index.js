import React, { useState } from 'react'
import { Box, Divider, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { Container, Row } from "react-bootstrap";
import MyCarousel from './components/Carousel';
import { Link } from 'react-router-dom';
import CustomButton from './components/button';
import { BookmarkBorderOutlined, Call, CompareOutlined, FlashOnOutlined, Note } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import TransitionAlerts from './components/alert-action';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: "white",
        marginTop: 10,
        marginBottom: 10,
    },
    menuTool: {
        minHeight: theme.spacing(10),
    },
    search: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    customBox: {
        display: "-webkit-box",
        boxOrient: "vertical",
        lineClamp: 10,
        wordBreak: "break",
        overflow: "hidden"
    },
}));

const SingleProduct = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(true)
    const [elevation1, setElevation1] = useState(4)
    const [elevation2, setElevation2] = useState(4)
    const [value, setValue] = React.useState(2);

    return (
        <Container className="mt-5" >
            <Row >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={10} className={classes.root}>
                        <Paper onMouseEnter={() => setElevation1(10)} onMouseLeave={() => setElevation1(4)} elevation={elevation1}>
                            <Grid container spacing={2} style={{ margin: '0 12px' }}>
                                <Grid item xs={12} md={7} className={classes.root}>
                                    <MyCarousel />
                                </Grid>
                                <Grid item xs={12} md={5} className={classes.root}>
                                    <div style={{ width: '90%', paddingTop: "20px" }}>
                                        <Typography variant="h6" >Modular Dome Rooflights Coxdome Circular</Typography>
                                        <Link>by Coxdome</Link>
                                        <Box
                                            component="div"
                                            classes={{ root: expanded && classes.customBox }}
                                            style={{ marginTop: "12px", marginBottom: "12px" }}
                                        >
                                            <Typography variant="p" paragraph={true} >The Coxdome Circular Rooflight offers an attractive,
                                                modern glazing solution which will add character and definition to any interior design
                                                space. Available in a range of sizes the domes are available with double, triple or quadruple
                                                glazing. Manufactured with a double layer GRP (Glass Reinforced Plastic) with polyurethane insulation,
                                                the upstands are compatible with all popular flat roofing membrane systems. Refer to Glazing,
                                                and Ventilation section for the full range of options, classification and specifications.
                                                Please note: Controllable background ventilation is not available in the Circular Range.
                                                Background ventilation is by means of Permanent ventilation only.
                                            </Typography>
                                        </Box>
                                        <Link onClick={() => setExpanded(!expanded)} >{expanded ? "Expand description" : "Collapse description"}</Link>

                                    </div>
                                </Grid>
                                <Grid item xs={12} className={classes.root}>
                                    <div style={{ width: '96%', paddingTop: "20px" }}>
                                        <TransitionAlerts style={{ width: '90%', paddingTop: "20px" }} />
                                    </div>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={2} className={classes.root} >
                        <Paper elevation={elevation2} onMouseEnter={() => setElevation2(10)} onMouseLeave={() => setElevation2(4)} >
                            <Box style={{ margin: '0px 10px', padding: '0 0px 40px' }}>

                                <Typography align='center' variant="h6" >
                                    <img src='/img/cox.png' alt='alt' />
                                </Typography>
                                <Typography align='center' variant="h6" >
                                    <Link>Coxdome</Link>
                                </Typography>
                                <Typography align='center' variant="p" paragraph={true} gutterBottom={true}>
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </Typography>

                                <Typography variant="p" paragraph={true} gutterBottom={true}>
                                    <Divider />
                                </Typography>

                                <Typography variant="p" paragraph={true} gutterBottom={true}>
                                    <CustomButton text='Download Product Pack' color="primary" variant='contained' width='100%' />
                                </Typography>

                                <Typography variant="p" paragraph={true} gutterBottom={true}>
                                    <CustomButton text='Request call' color="orange" variant='outlined' width='100%' startIcon={<Call />} />
                                </Typography>

                                <Typography variant="p" paragraph={true} gutterBottom={true}>
                                    <CustomButton text='Note' color="#414141" variant='outlined' width='100%' startIcon={<Note />} />
                                </Typography>

                                <Typography variant="p" paragraph={true} gutterBottom={true}>
                                    <CustomButton text='Bookmark' color="green" variant='outlined' width='100%' startIcon={<BookmarkBorderOutlined />} />
                                </Typography>

                                <Typography variant="p" paragraph={true} gutterBottom={true}>
                                    <CustomButton text='Compare' color="#3f51b5" variant='outlined' width='100%' startIcon={<CompareOutlined />} />
                                </Typography>

                                <Typography variant="p" paragraph={true} gutterBottom={true}>
                                    <Divider />
                                </Typography>

                                <Typography variant="p" paragraph={true} gutterBottom={true}>
                                    <CustomButton text='Request a Quote' color="green" variant='contained' width='100%' startIcon={<FlashOnOutlined />} />
                                </Typography>

                                <Typography align="center" variant="p" paragraph={true} gutterBottom={true}>
                                    <Link>Or, Ask a Question</Link>
                                </Typography>

                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Row>
        </Container>

    )
}

export default SingleProduct
