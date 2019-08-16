import { butterApi } from '../utils/api';
import getLodash from 'lodash/get';

export const getHomePageData = () => {
  const butter = butterApi();
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
