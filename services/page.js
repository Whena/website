import getLodash from 'lodash/get';
import Axios from 'axios';

const defaultOptions = {
  locale: 'id'
};

const pageApi = (pageType = '*', slug = '', params = defaultOptions) => {
  return Axios.get(`/api/page/${pageType}/${slug}`, {
    params
  });
};

export const getHomePageData = (options = {}) => {
  return pageApi('*', 'home', { ...defaultOptions, ...options })
    .then(function(response) {
      return getLodash(response, 'data.data');
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
};

export const getAboutUsData = (options = {}) => {
  return pageApi('*', 'about-us', { ...defaultOptions, ...options })
    .then(function(response) {
      return getLodash(response, 'data.data');
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
};

export const getBoostPlay = (options = {}) => {
  return pageApi('*', 'boostplay', {
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
  return pageApi('*', 'boostpenjual', {
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
  return pageApi('*', 'boostpreneur', {
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
  return pageApi('*', 'supplier', {
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
