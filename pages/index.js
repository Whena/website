import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import getLodash from 'lodash/get';
import Layout from '../components/Layout';
import Banner from '../components/Banner/Banner.component';
import BoostPersonas from '../components/BoostPersonas/BoostPersonas.component';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import Link from '../components/Link';
import { Constants } from '../constants';
import AsNumber from '../components/AsNumber/AsNumber.component';
import ProductSlider from '../components/ProductSlider/ProductSlider';
import { getHomePageData } from '../services/page';
import MiniInformation from '../components/HomeContent/MiniInformation';
import { resizeUrlButterImage } from '../utils/helpers';

const { HOME_BANNER } = Constants;

function Index(props) {
  const classes = useStyles();
  const { data } = props;
  const products = getLodash(data, 'fields.services', []);
  const personas = getLodash(data, 'fields.personas', []);
  const banner = getLodash(data, 'fields.banner', {});
  const miniInformations = getLodash(data, 'fields.mini_informations', []);

  return (
    <Layout title={'My Boost'}>
      <Banner
        contentPosition="flex-end"
        header={HOME_BANNER.HEADER}
        description={HOME_BANNER.DESCRIPTION}
        backgroundImage={resizeUrlButterImage(banner.image_banner, {
          resize: { h: 400 }
        })}
      >
        <Grid container justify="flex-start">
          <Grid item>
            <Grid container justify="space-between" spacing={5}>
              <Grid item xs={12} sm={6}>
                <Link href="/comingsoon" className={classes.links}>
                  <Button
                    variant="contained"
                    component="span"
                    className={classes.buttonViewMore}
                  >
                    <span className={classes.buttonText}>
                      {HOME_BANNER.LEFT_BUTTON}
                    </span>
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link href="/comingsoon" className={classes.links}>
                  <Button
                    variant="contained"
                    component="span"
                    className={classes.buttonSeeVideo}
                  >
                    <PlayCircleFilled className={classes.playIcon} />
                    <span className={classes.buttonText}>
                      {HOME_BANNER.RIGHT_BUTTON}
                    </span>
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Banner>
      <MiniInformation contents={miniInformations} />
      <BoostPersonas personas={personas} />
      <AsNumber />
      {products.length > 0 && <ProductSlider products={products} />}
    </Layout>
  );
}

Index.getInitialProps = async ({ err, req, res, query, ...others }) => {
  try {
    const data = await getHomePageData();
    return { data };
  } catch (error) {
    return { data: {}, error };
  }
};

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    backgroundImage: `url(/static/assets/bg-header-homepage.png)`, //'url(https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg)',
    backgroundSize: 'cover'
  },
  headerJumbotron: {
    marginBottom: 40,
    fontWeight: 700
  },
  description: {
    marginBottom: 40
  },
  buttonViewMore: {
    width: 157,
    height: 53,
    backgroundColor: 'rgb(220, 68, 51)',
    color: '#fff',
    textTransform: 'none',
    [theme.breakpoints.down('lg')]: {
      marginRight: 10
    },
    [theme.breakpoints.down('md')]: {
      width: 200,
      height: 68
    },
    [theme.breakpoints.down('xs')]: {
      width: 175,
      height: 63
    },
    '&:hover': {
      backgroundColor: 'rgb(240, 68, 51)'
    }
  },
  links: {
    '&:hover': {
      textDecoration: 'none',
      color: 'black'
    }
  },
  buttonSeeVideo: {
    width: 194,
    height: 53,
    borderRadius: '4px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: 'rgba(7, 7, 7, 0.25)',
    textTransform: 'none',
    [theme.breakpoints.between('md', 'lg')]: {
      marginLeft: 10
    },
    [theme.breakpoints.down('md')]: {
      width: 200,
      height: 68
    },
    [theme.breakpoints.down('xs')]: {
      width: 175,
      height: 63
    },
    '&:hover': {
      backgroundColor: 'rgba(7, 7, 7, 0.6)'
    }
  },
  homeJumbotron: {
    height: '600px'
  },
  playIcon: {
    marginRight: 10,
    fontSize: 34
  },
  buttonText: {
    fontSize: 24,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16
    },
    // "&:hover": {
    //   color: 'black'
    // },
    color: '#fff'
  }
}));

export default Index;
