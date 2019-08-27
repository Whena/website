import Buttercms from 'buttercms';
import getConfig from 'next/config';

export const butterApi = () => {
  const { publicRuntimeConfig } = getConfig();
  const token = publicRuntimeConfig.NEXT_PUBLIC_BUTTER_TOKEN;

  return Buttercms(token, false, 10000);
};
