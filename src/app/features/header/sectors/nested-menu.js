import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SubItemCard from './subitem-card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  box: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    margin: '10px',
  },
}));

export default function NestedMenu({sector}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.container}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <SubItemCard sector={sector} />
          </Grid>
          <Grid item xs={4}>
            <SubItemCard sector={sector} />
          </Grid>
          <Grid item xs={4}>
            <SubItemCard sector={sector} />
          </Grid>
          <Grid item xs={4}>
            <SubItemCard sector={sector} />
          </Grid>
          <Grid item xs={4}>
            <SubItemCard sector={sector} />
          </Grid>
          <Grid item xs={4}>
            <SubItemCard sector={sector} />
          </Grid>
          <Grid item xs={4}>
            <SubItemCard sector={sector} />
          </Grid>
          <Grid item xs={4}>
            <SubItemCard sector={sector} />
          </Grid>
          <Grid item xs={4}>
            <SubItemCard sector={sector} />
          </Grid>
          <Grid item xs={4}>
            <SubItemCard sector={sector} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}