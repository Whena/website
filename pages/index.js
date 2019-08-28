import React, { useMemo } from 'react';
import getLodash from 'lodash/get';
import Layout from '../components/Layout';
import Banner from '../components/Banner/Banner.component';
import BoostPersonas from '../components/BoostPersonas/BoostPersonas.component';
import AsNumber from '../components/AsNumber/AsNumber.component';
import ProductSlider from '../components/ProductSlider/ProductSlider';
import { getHomePageData } from '../services/page';
import MiniInformation from '../components/HomeContent/MiniInformation';
import { resizeUrlButterImage } from '../utils/helpers';

function Index({ data = {} }) {
  const products = getLodash(data, 'fields.services', []);
  const personas = getLodash(data, 'fields.personas', []);
  const banner = getLodash(data, 'fields.banner', {});
  const miniInformations = getLodash(data, 'fields.mini_informations', []);
  const statistic_title = getLodash(data, 'fields.statistic_title', '');
  const statistic_description = getLodash(data, 'fields.statistic_description', '');
  const statistic_data = getLodash(data, 'fields.statistics', []);

  const imageBanner = useMemo(
    () =>
      resizeUrlButterImage(banner.image_banner, {
        resize: { h: 400 }
      }),
    [banner]
  );

  return (
    <Layout>
      <Banner
        contentPosition="flex-end"
        header={banner.title}
        description={banner.description}
        actionUrl={banner.action_url}
        actionButtonText={banner.action_button_text}
        videoUrl={banner.video_url}
        videoButtonText={banner.video_button_text}
        googlePlayUrl={banner.google_play_url}
        appStoreUrl={banner.app_store_url}
        backgroundImage={imageBanner}
      />
      {miniInformations.length > 0 && (
        <MiniInformation contents={miniInformations} />
      )}
      {personas.length > 0 && <BoostPersonas personas={personas} />}
      {statistic_title && (
        <AsNumber
          title={statistic_title}
          description={statistic_description}
          data={statistic_data}
        />
      )}
      {products.length > 0 && <ProductSlider products={products} />}
    </Layout>
  );
}

Index.getInitialProps = async ({ err, req, res, query, ...others }, locale) => {
  try {
    const data = await getHomePageData({ locale });
    return { data };
  } catch (error) {
    return { data: {}, error };
  }
};

export default Index;
