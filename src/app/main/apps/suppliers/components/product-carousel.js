import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core/styles';
import { Box, ButtonBase } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    simple: {
      padding: '15px'
    },
    image: {
        margin: '0 auto',
        display: 'flex',
    },
    img: {
        maxWidth: 'auto',
        maxHeight: '300px',
    },
  }));

export default function ProductCarousel(props)
{
    let items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img: "/img/product1.jpg",
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img: "/img/product2.jpg",
        }
    ]

    return (
        <Carousel 
            autoPlay={false}
            //animation={this.state.animation}
            // indicators={this.state.indicators}
            // timeout={2000}
            navButtonsAlwaysVisible={false}
            // navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props) {
    const classes = useStyles();
    return (
        <div className={classes.simple}>
            <ButtonBase className={classes.image}>
                <Box textAlign="center">
                    <img src={props.item.img} alt="" className={classes.img}/>
                </Box>
            </ButtonBase>
        </div>
    )
}

