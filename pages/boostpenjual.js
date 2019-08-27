import React from 'react';
import getLodash from 'lodash/get';
import Layout from '../components/Layout';
import Banner from '../components/Banner/Banner.component';
import Benefits from '../components/Benefits/Benefits.component';
import Faqs from '../components/FAQs/FAQs.component';
import MerchantShortExplanation from '../components/MerchantShortExplanation/MerchantShortExplanation.component.js';
import { getBoostPenjual } from '../services/page';
import PersonaFeatures from '../components/Reusable/PersonaFeatures/PersonaFeatures.component';
import WhatTheySay from '../components/Reusable/WhatTheySay/WhatTheySay.component';
// 
export default function Boostpenjual({ data = {} }) {
  const banner = getLodash(data, 'fields.banner', {});
  const benefits = getLodash(data, 'fields.benefits', {});
  const short_description = getLodash(data, 'fields.short_description', {});
  const featured = getLodash(data, 'fields.featured', {});
  const testimonials = getLodash(data, 'fields.testimonials', {});
  const faq_header = getLodash(data, 'fields.faqs_header', '');
  const faqs = getLodash(data, 'fields.faqs', []);
  
  return (
    <Layout>
      <Banner
        header={banner.title}
        description={banner.description}
        backgroundImage={banner.image_banner}
        googlePlayUrl={banner.google_play_url}
        appStoreUrl={banner.app_store_url}
      />
      <Benefits heading={benefits.header} contents={benefits.banners} />
      <MerchantShortExplanation
        header={short_description.title}
        content={short_description}
      />
      {featured.header && (
        <PersonaFeatures
          title={featured.header}
          description={featured.description}
          features={featured.banners}
        />
      )}
      <WhatTheySay
        header={testimonials.header}
        testimonials={testimonials.banners}
      />
      <Faqs header={faq_header} questions={faqs} />
    </Layout>
  );
}

Boostpenjual.getInitialProps = async ({ err, req, res, query },
  locale
) => {
  try {
    const data = await getBoostPenjual({ locale });
    return { data };
  } catch (error) {
    return { data: {}, error };
  }
};
