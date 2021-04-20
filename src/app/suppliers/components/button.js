import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    btn: {
        // paddingTop: theme.spacing(0),
        // paddingBottom: theme.spacing(0),
        borderColor: props => props.color,
        color: props => props.color,
        borderRadius: '20px',
        '&:hover': {
            borderColor: props => props.color,
            opacity: '0.7'
        }
    },
}));


export default function CustomButton(props) {
  const classes = useStyles(props);

  return (
    <Button variant={props.variant} size="small" color={props.color} className={classes.btn}>
        {props.text}
    </Button>
  );
}