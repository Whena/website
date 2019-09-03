import React from 'react';
import getLodash from 'lodash/get';
import Layout from '../components/Layout';
import { Constants } from '../constants';
import Banner from '../components/Banner/Banner.component';
import Benefits from '../components/Benefits/Benefits.component';
import ShortExplanation from '../components/MerchantShortExplanation/MerchantShortExplanation.component';
import WhatTheySay from '../components/Reusable/WhatTheySay/WhatTheySay.component';
import Faqs from '../components/FAQs/FAQs.component';
// import ActionBannerButton from '../components/Banner/ActionBannerButton';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { getBoostInfluencer } from '../services/page';
import Link from '../components/Link';

const { KOL_BANNER, KOL_BENEFITS } = Constants;

export default function Influencer({ data = {} }) {
  const classes = useStyles();
  const banner = getLodash(data, 'fields.banner', {});
  const benefits = getLodash(data, 'fields.benefits', {});
  const WhyUs = getLodash(data, 'fields.short_description', {});
  const testimonials = getLodash(data, 'fields.testimonials', {});
  const faq_header = getLodash(data, 'fields.faqs_header', '');
  const faqs = getLodash(data, 'fields.faqs', []);

  return (
    <Layout>
      <Banner 
        header={banner.title}
        description={banner.description}
        backgroundImage={banner.image_banner}
      >
        <Button
          component={Link}
          href={banner.action_url}
          variant="outlined"
          className={classes.button}
        >
          {banner.action_button_text}
        </Button>
        {/* <ActionBannerButton
          actionUrl={banner.action_url}
          actionButtonText={banner.action_button_text}
        /> */}
      </Banner>
      <Benefits heading={benefits.header} contents={benefits.banners} />
      <ShortExplanation
        header={WhyUs.title_or_question}
        description={WhyUs.answer_or_description}
        className={classes.containerMission}
      />
      <WhatTheySay
        header={testimonials.header}
        testimonials={testimonials.banners}
      />
      <Faqs
        header={faq_header}
        questions={faqs}
      />
    </Layout>
  );
}

Influencer.getInitialProps = async ( { err, req, res, query, ...others }, locale ) => {
  try {
    const data = await getBoostInfluencer({ locale });
    return { data };
  } catch (error) {
    return { data: {}, error };
  }
};

const useStyles = makeStyles((theme) => ({
  signUpButton: {
    width: '60%',
    height: '80%',
    border: '2px solid #fff'
  },
  buttonText: {
    marginTop: 5,
    height: 60,
    color: '#fff',
    fontSize: '30px',
    textTransform: 'none'
  },
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
  },
}));
