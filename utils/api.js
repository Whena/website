import Buttercms from 'buttercms';

export const butterApi = () => {
  return Buttercms(process.env.NEXT_SERVER_BUTTER_TOKEN);
};
