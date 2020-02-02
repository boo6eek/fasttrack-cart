import {REMOVE_PRODUCT, CHANGE_PRODUCT} from './constants';

export const removeProduct = index => {
  return {
    type: REMOVE_PRODUCT,
    data: {index}
  };
};

export const changeProduct = (index, product) => {
  return {
    type: CHANGE_PRODUCT,
    data: {index, product}
  };
};
