import { butterApi } from '../utils/api';
import getLodash from 'lodash/get';
const butter = butterApi();

const getHomePageData = () => {
  return butter.page
    .retrieve('*', 'home', { locale: 'en' })
    .then(function(response) {
      return getLodash(response, 'data.data');
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
};

const getAboutUsData = () => {
  return butter.page
    .retrieve('*', 'about-us', { locale: 'en' })
    .then(function(response) {
      return getLodash(response, 'data.data');
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
}

const getBoostPlay = () => {
  return butter.page
    .retrieve('*', 'boostplay', { locale: 'en', levels: 3 })
    .then(function(response) {
      return getLodash(response, 'data.data');
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
}

const getBoostPenjual = () => {
  return butter.page
    .retrieve('*', 'boostpenjual', { locale: 'en', levels: 3 })
    .then(function(response) {
      return getLodash(response, 'data.data');
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
}

export {
  getHomePageData,
  getAboutUsData,
  getBoostPlay,
  getBoostPenjual
}