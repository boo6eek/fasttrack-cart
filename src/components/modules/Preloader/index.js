import React from 'react';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
import propTypes from './propTypes';

const Preloader = props => {
  const {show, children, classes} = props;
  return (
    <div>
      {show ? <Fade in={show}>
        <div className={classes.root}>
          <CircularProgress/>
        </div>
      </Fade> : children}
    </div>
  );
};

Preloader.propTypes = propTypes;

export default withStyles(styles)(Preloader);
