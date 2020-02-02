import React, {useEffect} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import withStyles from '@material-ui/core/styles/withStyles';
import cartApi from '../../../store/products/api';
import {selectProducts} from '../../../store/products/selectors';
import {removeProduct, changeProduct} from '../../../store/products/actions';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Product} from '../../../components/organisms';
import {Button} from '../../../components/atoms';
import {Preloader} from '../../../components/modules';
import {goToNotFound} from '../../../utils/redirects';
import propTypes from './propTypes';

const Cart = props => {
  const {urlQuery, getCart, updateCart, pushCart, handleRemove, handleChange, classes, products} = props;

  useEffect(() => {
    if (_.isEmpty(urlQuery)) {
      goToNotFound();
    } else {
      getCart({
        chatUuid: urlQuery.chat_uuid
      }, {
        headers: {'bot-key': urlQuery.bot_key}
      }).then(({products}) => (
        products ? null : goToNotFound()
      ));
    }
  }, [urlQuery, getCart]);

  const handleSubmit = async() => {
    const headers = {'bot-key': urlQuery.bot_key};
    const condition = {chatUuid: urlQuery.chat_uuid};

    await updateCart(condition, {headers, data: {my_cart: {products}}});
    await pushCart(condition, {
      headers,
      data: {
        getParams: {
          baseUrl: urlQuery.base_url,
          botKey: urlQuery.bot_key,
          chatUuid: urlQuery.chat_uuid,
          formConfigVariable: urlQuery.form_config_variable,
          onCloseUrl: urlQuery.on_close_url,
          onSuccessNode: urlQuery.on_success_node
        },
        isAsync: false,
        node: urlQuery.on_success_node
      }
    });

    document.location.href = urlQuery.on_close_url;
  };

  const total = _.reduce(products, (memo, product) => {
    memo += product.price * product.quantity;
    return memo;
  }, 0);

  return (
    <Preloader show={_.isEmpty(products)}>
      <Grid container justify="center" className={classes.root}>
        <Grid container item xs={12} alignItems='center' className={classes.header}>
          <Grid item><ShoppingCartIcon className={classes.icon}/></Grid>
          <Grid item>
            <Typography component='h1'>
              Корзина
            </Typography>
          </Grid>
        </Grid>
        {_.map(products, (product, index) => (
          <Product
            key={index}
            product={product}
            handleChange={handleChange.bind(this, index)}
            handleRemove={handleRemove.bind(this, index)}
          />
        ))}
        <Grid container item xs={12} justify='space-between' className={classes.bottom}>
          <Grid item><Typography>Сумма заказа</Typography></Grid>
          <Grid item><Typography>{total} руб.</Typography></Grid>
          <Grid item xs={12}>
            <Button
              variant='outlined'
              color='primary'
              fullWidth
              className={classes.button}
              onClick={handleSubmit}
            >
              Продолжить
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Preloader>
  );
};
Cart.propTypes = propTypes;

const mapStateToProps = state => (
  {
    products: selectProducts(state)
  }
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCart: cartApi.actions.get,
      updateCart: cartApi.actions.post,
      pushCart: cartApi.actions.push,
      handleRemove: removeProduct,
      handleChange: changeProduct
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Cart));
