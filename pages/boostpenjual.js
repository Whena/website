import React from 'react';
import Layout from '../components/Layout';
import { Constants } from '../constants';
import Banner from '../components/Banner/Banner.component';
import Benefits from '../components/Benefits/Benefits.component';
import Faqs from '../components/FAQs/FAQs.component';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MerchantShortExplanation from '../components/MerchantShortExplanation/MerchantShortExplanation.component.js' 

import getLodash from 'lodash/get';
import { getBoostPenjual } from '../services/page';
import PersonaFeatures from '../components/Reusable/PersonaFeatures/PersonaFeatures.component';
import WhatTheySay from '../components/Reusable/WhatTheySay/WhatTheySay.component';

export default function Boostpenjual(props) {
  const classes = useStyles();
  const { data } = props
  const banner = getLodash(data, 'fields.banner');
  const benefits = getLodash(data, 'fields.benefits');
  const short_description = getLodash(data, 'fields.short_description');
  const featured = getLodash(data, 'fields.featured');
  const testimonials = getLodash(data, 'fields.testimonials');
  const faq_header = getLodash(data, 'fields.faqs_header');
  const faqs = getLodash(data, 'fields.faqs')
  console.log(data)

  return (
    <Layout>
      <Banner
        contentPosition="flex-start"
        header={banner.title}
        description={banner.description}
        backgroundImage={banner.image_banner}
        googlePlayUrl={banner.google_play_url}
        appStoreUrl={banner.app_store_url}
      />
      <Benefits
        heading={benefits.header}
        contents={benefits.banners}
      />
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
      <Faqs
        header={faq_header}
        questions={faqs}
      />
    </Layout>
  );
}

Boostpenjual.getInitialProps = async({ err, req, res, query }) => {
  try {
    const data = await getBoostPenjual();
    return { data }
  } catch (error) {
    return { data: {}, error }
  }
}

const useStyles = makeStyles((theme) => ({
  downloadButtonContainer: {
    marginTop: 15
  },
  buttonConfiguration: {
    // width: '80%'
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  imageDownloadButton: {
    width: '80%',
    height: '90%',
    margin: '5px auto',
    [theme.breakpoints.down('md')]: {
      width: 150,
      height: 45
    },
    [theme.breakpoints.down('sm')]: {
      width: 125,
      height: 40
    }
  },
  wordingContainer: {
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3)
    },
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3)
  },
  wording: {
    color: '#fff',
    // fontSize:'0.4em',
    lineHeight: 1.5
    // [theme.breakpoints.down('md')]: {
    //   fontSize: '1.0rem'
    // },
    // [theme.breakpoints.down('xs')]: {
    //   fontSize: '0.25em'
    // }
  },
  buttonContainer: {
    textAlign: 'center'
  },
  buttonText: {
    color: 'red',
    fontSize: '2.2em', //20
    textTransform: 'none',

    [theme.breakpoints.down('md')]: {
      fontSize: '1.7em'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.7em'
    }
  },
  joinNowButton: {
    backgroundColor: '#fff',
    width: 250,
    [theme.breakpoints.down('md')]: {
      width: 230,
      height: 70
    },
    [theme.breakpoints.down('sm')]: {
      width: 200,
      height: 50
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
      width: 180,
      height: 50
    },
    marginLeft: 20
  }
}));
