import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const NotFound = () => (
  <Grid container item xs={12} alignItems="center" style={{height: '100vh'}}>
    <Grid item container direction='column' alignItems="center">
      <ErrorOutlineIcon fontSize='large' color='secondary'/>
      <Typography component='h1'>
        Нет данных!
      </Typography>
    </Grid>
  </Grid>
);

export default NotFound;
