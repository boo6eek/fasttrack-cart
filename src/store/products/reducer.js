import _ from 'lodash';
import api from './api';
import {CHANGE_PRODUCT, REMOVE_PRODUCT} from './constants';

const initialState = {
  get: {},
};

export default function(state = initialState, {type, data}) {
  switch (type) {
    case api.events.get.actionSuccess:
      return {
        ...state,
        get: {data}
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        get: {
          ...state.get,
          data: {
            products: _.remove(state.get.data.products, (product, index) => data.index !== index)
          }
        }
      };
    case CHANGE_PRODUCT:
      return {
        ...state,
        get: {
          ...state.get,
          data: {
            products: _.map(state.get.data.products, (product, index) => (
                data.index === index ? data.product : product
              )
            )
          }
        }
      };
    case api.events.post.actionSuccess:
    default:
      return state;
  }
}
