import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import { Box, Collapse, IconButton, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function TransitionAlerts() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="16px" />
            </IconButton>
          }
          severity="info"
          icon={false}
        >
        <Typography variant="body2" paragraph>
            <Box fontSize='16px'>
              Please note that these product properties are not a replacement for 
              the manufacturer's literature and it is always recommended that <strong>Fire 
              Angel</strong> is consulted before specifying. 
            </Box>
        </Typography>
        </Alert>
      </Collapse>
      {/* <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button> */}
    </div>
  );
}
