import getLodash from 'lodash/get';
import { butterApi } from '../utils/api';

const defaultOptions = {
  locale: 'en'
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

export const getAboutUsData = () => {
  return butterApi()
    .page.retrieve('*', 'about-us', { ...defaultOptions })
    .then(function(response) {
      return getLodash(response, 'data.data');
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
};

export const getBoostPlay = () => {
  return butterApi()
    .page.retrieve('*', 'boostplay', { ...defaultOptions, levels: 3 })
    .then(function(response) {
      return getLodash(response, 'data.data');
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
};

export const getBoostPenjual = () => {
  return butterApi()
    .page.retrieve('*', 'boostpenjual', { ...defaultOptions, levels: 3 })
    .then(function(response) {
      return getLodash(response, 'data.data');
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
};

export const getBoostPreneur = () => {
  return butterApi()
    .page.retrieve('*', 'boostpreneur', { ...defaultOptions, levels: 3 })
    .then(function(response) {
      console.log(response);
      return getLodash(response, 'data.data');
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
};
