import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    simple: {
      padding: '15px'
    },
    img: {
    maxWidth: 'auto',
    maxHeight: '200px',
    },
  }));

export default function ProductImage(props)
{
    let items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img: "./img/everyday-basics-I8eTuMmxIfo-unsplash.jpg",
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img: "./img/everyday-basics-I8eTuMmxIfo-unsplash.jpg",
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    const classes = useStyles();
    return (
        <div className={classes.simple}>
            {/* <h2>{props.item.name}</h2>
            <p>{props.item.description}</p> */}
            <Box textAlign="center">
                <img src={props.item.img} alt="" className={classes.img}/>
            </Box>

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </div>
    )
}

