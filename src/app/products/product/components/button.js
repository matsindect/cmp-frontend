import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    btn: {
        // paddingTop: theme.spacing(0),
        // paddingBottom: theme.spacing(0),
        fontSize: '13px',
        borderColor: props => props.color,
        color: props => props.color,
        textTransform: 'capitalize',
        borderRadius: '20px',
        opacity: '0.9',
        '&:hover': {
            borderColor: props => props.color,
            background: props => props.color,
            color: 'white',
            opacity: '1',
        },
        wordWrap: 'breakWord',
    },
}));


export default function CustomButton(props) {
  const classes = useStyles(props);

  return (
    <Button style={{width: props.width}} variant={props.variant} size="small" color={props.color} className={classes.btn} startIcon={props.startIcon}>
        <Box whiteSpace="nowrap" textOverflow="ellipsis">
          {props.text}
        </Box>
    </Button>
  );
}