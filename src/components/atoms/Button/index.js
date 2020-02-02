import React from 'react';
import classnames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
import MaterialButton from '@material-ui/core/Button';
import propTypes from './propTypes';

const Button = props => {
  const {children, classes, className, ...other} = props;

  return (
    <MaterialButton
      className={classnames(classes.button, className)}
      {...other}
    >
      {children}
    </MaterialButton>
  );
};

Button.propTypes = propTypes;

export default withStyles(styles)(Button);
