import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#808080d4',
    position: 'fixed',
    top: 0,
    left: 0
  }
}));

const Loader = () => {
  const classes = useStyles();
  return (
    <Grid container 
      className={classes.root}
      justify='center'
      alignItems='center'
    >
      <Grid item>
        <CircularProgress size='8rem' thickness='4' />
      </Grid>
    </Grid>
  )
}

export default Loader
