import getConfig from 'next/config';
import cookie from 'js-cookie';

export const LANG_KEY = '_lang';
export const DEFAULT_LANG = 'en';

export const isButterImage = (url = '') => {
  return String(url).indexOf('cdn.buttercms.com') !== -1;
};

export const getButterImageId = (url = '') => {
  const result = String(url).match(/buttercms.com\/(.*)/);

  if (result && result.length > 1) {
    return result[1];
  }

  return null;
};

const defaultOptions = {
  compress: true,
  auto_image: true
};

export const resizeUrlButterImage = (url = '', options = {}) => {
  if (isButterImage(url) === false) {
    return url;
  }

  const imageId = getButterImageId(url);

  if (imageId === null) {
    return url;
  }

  const combineOptions = { ...defaultOptions, ...options };

  const pathUrl = Object.keys(combineOptions).map((optKey) => {
    const value = combineOptions[optKey];

    switch (typeof value) {
      case 'object':
        return `${optKey}=${Object.keys(value)
          .map((key) => `${key}:${value[key]}`)
          .join(',')}`;
      case 'boolean':
        if (optKey === 'cache') {
          return `${optKey}=false`;
        }

        return value === true ? optKey : null;
      default:
        return `${optKey}=${value}`;
    }
  });

  const { publicRuntimeConfig } = getConfig();

  const resizeUrl = new URL(
    `${pathUrl.join('/')}/${imageId}`,
    publicRuntimeConfig.NEXT_PUBLIC_BUTTER_FILESTACK
  );

  return resizeUrl.toString();
};

export const getYoutubeId = (url) => {
  const regex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|&v(?:i)?=))([^#&?]*).*/;

  const result = String(url).match(regex);

  if (result && result.length > 1) {
    return result[1];
  }

  return null;
};

export const setLanguage = (value = DEFAULT_LANG) => {
  cookie.set(LANG_KEY, value, { expires: 365 });
};

export const getLanguage = () => {
  const lang = cookie.get(LANG_KEY);

  return lang ? lang : DEFAULT_LANG;
};
