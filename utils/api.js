import Buttercms from 'buttercms';

export const butterApi = () => {
  const token = process.env.NEXT_SERVER_BUTTER_TOKEN;

  return Buttercms(token, false, 30000);
};
