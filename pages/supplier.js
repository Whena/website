import React from 'react';
import getLodash from 'lodash/get';
import makeStyles from '@material-ui/styles/makeStyles';
import Layout from '../components/Layout';
import { getBoostSupplier } from '../services/page';
import Banner from '../components/Banner/Banner.component';
import Benefits from '../components/Benefits/Benefits.component';
import ShortExplanation from '../components/MerchantShortExplanation/MerchantShortExplanation.component';
import WhatTheySay from '../components/Reusable/WhatTheySay/WhatTheySay.component';
import BottomBanner from '../components/Reusable/BottomBanner/BottomBanner.component';
import Faqs from '../components/FAQs/FAQs.component';
import { resizeUrlButterImage } from '../utils/helpers';
import LeftButton from '../components/about/LeftButton';
import RightInfo from '../components/about/RightInfo';

function Supplier({ data = {} }) {
  const classes = useStyles();
  const banner = getLodash(data, 'fields.banner', {});
  const benefits = getLodash(data, 'fields.benefits', {});
  const mission = getLodash(data, 'fields.short_description', {});
  const testimonials = getLodash(data, 'fields.testimonials', {});
  const faq_header = getLodash(data, 'fields.faqs_header', '');
  const faqs = getLodash(data, 'fields.faqs', []);
  const bottombanner = getLodash(data, 'fields.bottombanner', {});

  return (
    <Layout title="Supplier">
      <Banner
        header={banner.title}
        description={banner.description}
        backgroundImage={resizeUrlButterImage(banner.image_banner, {
          resize: { h: 400 }
        })}
        actionUrl={banner.action_url}
        actionButtonText={banner.action_button_text}
        actionButtonStyles={classes.button}
      />
      {benefits.banners && (
        <Benefits
          heading={benefits.header}
          contents={benefits.banners}
        />
      )}
      {mission.title_or_question && (
        <ShortExplanation
          header={mission.title_or_question}
          description={mission.answer_or_description}
          className={classes.containerMission}
        />
      )}
      {testimonials.header && (
        <WhatTheySay
          header={testimonials.header}
          testimonials={testimonials.banners}
        />
      )}
      {faqs.length > 0 && (
        <Faqs header={faq_header} questions={faqs} />
      )}
      {bottombanner.description && (
        <BottomBanner
          leftGrid={4}
          left={
            <LeftButton 
              url={bottombanner.action_url} 
              buttonText={bottombanner.action_button_text} 
            />
          }
          right={<RightInfo description={bottombanner.description} />}
          background={bottombanner.image_banner}
        />
      )}
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
    lineHeight: 1.5
  },
  buttonContainer: {
    textAlign: 'center'
  },
  buttonText: {
    color: 'red',
    fontSize: '2.2em',//20
    textTransform: 'none',

    [theme.breakpoints.down('md')]: {
      fontSize: '1.7em'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3em'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.7em'
    }
  },
  joinNowButton: {
    backgroundColor: '#fff',
    minWidth: 250,
    [theme.breakpoints.down('md')]: {
      minWidth: 230,
      height: 70
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 200,
      height: 50
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
      minWidth: 180,
      height: 50
    },
    marginLeft: 20
  }
}));

export default Supplier;
