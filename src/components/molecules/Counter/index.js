import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {Button} from '../../atoms';
import propTypes from './propTypes';

const Counter = props => {
  const {classes, handleChange, count} = props;

  return (
    <ButtonGroup className={classes.root}>
      <Button
        onClick={handleChange.bind(this, Math.max(count - 1, 1))}
      >
        <RemoveIcon className={classes.icon} fontSize="small"/>
      </Button>
      <Button disabled>
        {count}
      </Button>
      <Button
        onClick={handleChange.bind(this, count + 1)}
      >
        <AddIcon className={classes.icon} fontSize="small"/>
      </Button>
    </ButtonGroup>
  );
};

Counter.propTypes = propTypes;

export default withStyles(styles)(Counter);
