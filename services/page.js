import { butterApi } from '../utils/api';
import getLodash from 'lodash/get';

export const getHomePageData = () => {
  return butterApi()
    .page.retrieve('*', 'home', { locale: 'en' })
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
    .page.retrieve('*', 'about-us', { locale: 'en' })
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
    .page.retrieve('*', 'boostplay', { locale: 'en', levels: 3 })
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
    .page.retrieve('*', 'boostpenjual', { locale: 'en', levels: 3 })
    .then(function(response) {
      return getLodash(response, 'data.data');
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
};
