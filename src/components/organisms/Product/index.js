import React from 'react';
import _ from 'lodash';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Button} from '../../atoms';
import {Counter} from '../../molecules';
import propTypes from './propTypes';

const Product = props => {
  const {product, classes, handleChange, handleRemove} = props;

  const handleChangeQuantity = quantity => handleChange({...product, quantity});

  return (
    <Grid container item xs={12} className={classes.root}>
      <Grid container item xs={12} alignItems='center'>
        <Grid item xs={6}>
          <Typography>
            {product.key}
          </Typography>
          {_.map(product.detail, (value, name) => (
            <Typography key={name} component='p' variant='caption' className={classes.lineHeight}>
              {name}:{value}
            </Typography>
          ))}
        </Grid>
        <Grid container item xs={6} justify='flex-end'>
          <Typography>{product.price} руб.</Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} justify='space-around' className={classes.buttons}>
        <Grid item>
          <Counter handleChange={handleChangeQuantity} count={product.quantity}/>
        </Grid>
        <Grid item>
          <Button
            variant='outlined'
            color='secondary'
            onClick={handleRemove}
          >
            Удалить
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

Product.propTypes = propTypes;

export default withStyles(styles)(Product);
