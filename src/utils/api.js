import _ from 'lodash';
import reduxApi from 'redux-api';
import config from '../config';

import adapterFetch from './adapterFetch';
import {concatPath} from './url';

const apiConfig = config.api;

const defaultHeaders = apiConfig.headers;
const defaultUrlOptions = {
  arrayFormat: 'brackets'
};

const createApi = ({prefix, endpoints}) => {
  const urlPrefix = `/${prefix}`;

  const preparedEndpoints = _.reduce(endpoints, (newEndpoints, value, key) => {
    const endpointOptions = typeof value === 'string' ? {url: value} : value;

    const {url, disableContentType} = endpointOptions;
    const options = endpointOptions.options || {};

    options.headers = {...options.headers, ...defaultHeaders};
    endpointOptions.urlOptions = {...endpointOptions.urlOptions, ...defaultUrlOptions};

    if (disableContentType) {
      options.headers = _.omit(options.headers, 'Content-Type');
    }

    endpointOptions.prefetch = endpointOptions.prefetch || [];

    newEndpoints[key] = {
      ...endpointOptions,
      url: concatPath(urlPrefix, url),
      options
    };

    return newEndpoints;
  }, {});

  const rest = reduxApi(preparedEndpoints, {prefix});

  rest.use('fetch', adapterFetch(fetch));
  rest.use('rootUrl', apiConfig.basePath);

  return rest;
};

export default createApi;
