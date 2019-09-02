import { butterApi } from '../../../../utils/api';

export default function(req, res) {
  const { pageType, slug, ...params } = req.query;

  return butterApi()
    .page.retrieve(pageType, slug, params)
    .then((response) => {
      return res.status(200).json(response.data);
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json(error);
    });
}
