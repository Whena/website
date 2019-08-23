import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import Banner from '../components/Banner/Banner.component';
import Benefits from '../components/Benefits/Benefits.component';
import { Constants } from '../constants';

import BoostpreneurMiniInfo from '../components/BoostpreneurMiniInfo/BoostpreneurMiniInfo.component';
import HowToSliderContainer from '../components/HowToSlider/HowToSliderContainer';
import Faqs from '../components/FAQs/FAQs.component';
import PersonaFeatures from '../components/Reusable/PersonaFeatures/PersonaFeatures.component';

import getLodash from 'lodash/get';
import { getBoostPreneur } from '../services/page';
import { resizeUrlButterImage } from '../utils/helpers';

const { BEING_A_BOOSTPRENEUR, BOOSTPRENEUR_BANNER, BANNER_BUTTONS } = Constants;

export default function BoostPreneur({ data = {} }) {
  const classes = useStyles();
  const banner = getLodash(data, 'fields.banner', []);
  const benefits = getLodash(data, 'fields.benefits', []);
  const boostpreneur_information = getLodash(data, 'fields.boostpreneur_information', []);
  const how_to = getLodash(data, 'fields.how_to', []);
  const boostpreneur_quest = getLodash(data, 'fields.boostpreneur_quest', []);
  const faqs_header = getLodash(data, 'fields.faqs_header', []);
  const faqs = getLodash(data, 'fields.faqs', []);
  
  console.log(data)
  return (
    <Layout>
      <Banner
        contentPosition="flex-start"
        header={banner.title}
        description={banner.description}
        backgroundImage={banner.image_banner}
      >
        <Grid
          container
          className={classes.downloadButtonContainer}
          justify="flex-start"
          spacing={3}
        >
          <Grid item xs={3} sm={5} md={5}>
            <img
              className={classes.imageDownloadButton}
              src={BANNER_BUTTONS.GOOGLE_PLAY}
              alt="Google Play"
            />
          </Grid>
          <Grid item xs={3} sm={5} md={5}>
            <img
              className={classes.imageDownloadButton}
              src={BANNER_BUTTONS.APP_STORE}
              alt="App Store"
            />
          </Grid>
        </Grid>
      </Banner>
      <Benefits 
        heading={benefits.header} 
        contents={benefits.banners} 
      />
      <BoostpreneurMiniInfo contents={boostpreneur_information.banners} />
      {how_to.header && (
        <HowToSliderContainer sliders={how_to.banners} title={how_to.header} />
      )}
      {boostpreneur_quest.header && (
        <PersonaFeatures
          title={boostpreneur_quest.header}
          description={boostpreneur_quest.description}
          features={boostpreneur_quest.banners}
        />
      )}
      <Faqs 
        header={faqs_header}
        questions={faqs}
      />
    </Layout>
  );
}

BoostPreneur.getInitialProps = async ({ err, res, req, query }) => {
  try {
    const data = await getBoostPreneur();
    return { data };
  } catch (error) {
    return { data: {}, error };
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  headContainer: {
    margin: '20px auto'
  },
  bannerContainer: {
    backgroundColor: 'rgb(237, 237, 237)',
    backgroundImage:
      'url(https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg)',
    backgroundSize: 'cover',
    height: 600
  },
  bannerMenu: {
    marginLeft: 100
  },
  head: {
    marginBottom: 40,
    fontWeight: 600,
    fontSize: 50,
    [theme.breakpoints.down('md')]: {
      fontWeight: 500,
      fontSize: 45
    },
    [theme.breakpoints.down('sm')]: {
      fontWeight: 500,
      fontSize: 40
    }
  },
  description: {
    marginBottom: 40,
    fontSize: 27.5,
    [theme.breakpoints.down('md')]: {
      fontSize: 22.5
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 17.5
    }
  },
  downloadButtonContainer: {
    marginTop: 15
  },
  imageDownloadButton: {
    width: '80%',
    height: '90%',
    [theme.breakpoints.down('md')]: {
      width: 150,
      height: 45
    },
    [theme.breakpoints.down('sm')]: {
      width: 125,
      height: 40
    }
  }
}));
