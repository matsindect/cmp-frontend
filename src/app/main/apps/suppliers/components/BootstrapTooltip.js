import { makeStyles, Tooltip } from '@material-ui/core';
import React from 'react'

const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: '#0e1e2a'
    },
    tooltip: {
      backgroundColor: '#0e1e2a'
    },
    customWidth: {
        maxWidth: 100,
    },
  }));

const BootstrapTooltip = (props) => {
    const classes = useStylesBootstrap();

    return (
        <Tooltip arrow classes={classes} {...props} />
    )
}

export default BootstrapTooltip
