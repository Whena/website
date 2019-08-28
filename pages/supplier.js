import React from 'react';
import getLodash from 'lodash/get';
import makeStyles from '@material-ui/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Layout from '../components/Layout';
import { getBoostSupplier } from '../services/page';
import Banner from '../components/Banner/Banner.component';
import Benefits from '../components/Benefits/Benefits.component';
import ShortExplanation from '../components/MerchantShortExplanation/MerchantShortExplanation.component';
import WhatTheySay from '../components/Reusable/WhatTheySay/WhatTheySay.component';
import Faqs from '../components/FAQs/FAQs.component';
import { resizeUrlButterImage } from '../utils/helpers';

function Supplier({ data = {} }) {
  const classes = useStyles();
  const banner = getLodash(data, 'fields.banner', {});
  const benefits = getLodash(data, 'fields.benefits', {});
  const mission = getLodash(data, 'fields.short_description', {});
  const testimonials = getLodash(data, 'fields.testimonials', {});
  const faq_header = getLodash(data, 'fields.faqs_header', '');
  const faqs = getLodash(data, 'fields.faqs', []);

  return (
    <Layout title="Supplier">
      <Banner
        header={banner.title}
        description={banner.description}
        backgroundImage={resizeUrlButterImage(banner.image_banner, {
          resize: { h: 400 }
        })}
      >
        <Button variant="outlined" className={classes.button}>
          {banner.action_button_text}
        </Button>
      </Banner>
      <Benefits
        heading={benefits.header}
        contents={benefits.banners}
      />
      <ShortExplanation
        header={mission.title_or_question}
        description={mission.answer_or_description}
        className={classes.containerMission}
      />
      <WhatTheySay
        header={testimonials.header}
        testimonials={testimonials.banners}
      />
      <Faqs header={faq_header} questions={faqs} />
    </Layout>
  );
}

Supplier.getInitialProps = async ({ err, req, res, query, ...others }, locale) => {
  try {
    const data = await getBoostSupplier({ locale });
    return { data };
  } catch (error) {
    return { data: {}, error };
  }
};

const useStyles = makeStyles((theme) => ({
  button: {
    minWidth: 275,
    minHeight: 60,
    border: "1px solid white",
    color: '#fff',
    fontWeight: 800,
    fontFamily: 'raleway',
    fontSize: 20,
    textTransform: 'none'
  },
  containerMission: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10)
  }
}));

export default Supplier;

