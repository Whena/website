import getLodash from 'lodash/get';
import { butterApi } from '../utils/api';

const defaultOptions = {
  locale: 'id'
};

export const getHomePageData = (options = {}) => {
  return butterApi()
    .page.retrieve('*', 'home', { ...defaultOptions, ...options })
    .then(function(response) {
      return getLodash(response, 'data.data');
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
};

export const getAboutUsData = (options = {}) => {
  return butterApi()
    .page.retrieve('*', 'about-us', { ...defaultOptions, ...options })
    .then(function(response) {
      return getLodash(response, 'data.data');
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
};

export const getBoostPlay = (options = {}) => {
  return butterApi()
    .page.retrieve('*', 'boostplay', {
      ...defaultOptions,
      levels: 3,
      ...options
    })
    .then(function(response) {
      return getLodash(response, 'data.data');
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
};

export const getBoostPenjual = (options = {}) => {
  return butterApi()
    .page.retrieve('*', 'boostpenjual', {
      ...defaultOptions,
      levels: 3,
      ...options
    })
    .then(function(response) {
      return getLodash(response, 'data.data');
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
};

export const getBoostPreneur = (options = {}) => {
  return butterApi()
    .page.retrieve('*', 'boostpreneur', {
      ...defaultOptions,
      levels: 3,
      ...options
    })
    .then(function(response) {
      return getLodash(response, 'data.data');
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
};

export const getBoostSupplier = (options = {}) => {
  return butterApi()
    .page.retrieve('*', 'supplier', {
      ...defaultOptions,
      levels: 3,
      ...options
    })
    .then(function(response) {
      return getLodash(response, 'data.data');
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
};
