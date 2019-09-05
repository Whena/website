import React from 'react';
import getLodash from 'lodash/get';
import Layout from '../components/Layout';
import Banner from '../components/Banner/Banner.component';
import Benefits from '../components/Benefits/Benefits.component';
import { getFinancialServices } from '../services/page';

export default function FinancialServices({ data = {} }) {
  const banner = getLodash(data, 'fields.banner', {});
  const benefits = getLodash(data, 'fields.benefits', {});

  return (
    <Layout>
      <Banner
        header={banner.title}
        description={banner.description}
        backgroundImage={banner.image_banner}
      />
      {benefits.header &&
        <Benefits heading={benefits.header} contents={benefits.banners} />
      }
    </Layout>
  );
}

FinancialServices.getInitialProps = async ( { err, req, res, query, ...others }, locale ) => {
  try {
    const data = await getFinancialServices({ locale });
    return { data };
  } catch (error) {
    return { data: {}, error };
  }
};
