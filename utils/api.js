import Buttercms from 'buttercms';
import getConfig from 'next/config';

export const butterApi = () => {
  const { publicRuntimeConfig } = getConfig();

  return Buttercms(publicRuntimeConfig.NEXT_PUBLIC_BUTTER_TOKEN);
};
