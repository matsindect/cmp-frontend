import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core'

function Project(props) {
    return (
        <Paper
            className="Project"
            style={{
                background: `url(${props.item.url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            elevation={10}
        >
        </Paper>
    )
}

const items = [
    {
        url: "/img/1.jpg",
    },
    {
        url: "/img/2.jpg",
    },
    {
        url: "/img/3.jpg",
    }
]

export default class MyCarousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: false,
            animation: "slide",
            indicators: true,
            timeout: 1100,
            navButtonsAlwaysVisible: true,
            navButtonsAlwaysInvisible: false
        }
    }

    render() {
        return (
            <div style={{ paddingTop: "40px", color: "#494949", border: '12px solid rgba(0,0,0,.125);' }}>

                <Carousel
                    className="SecondExample"
                    autoPlay={this.state.autoPlay}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}

                >
                    {
                        items.map((item, index) => {
                            return <Project item={item} key={index} />
                        })
                    }
                </Carousel>

            </div>
        )
    }
}