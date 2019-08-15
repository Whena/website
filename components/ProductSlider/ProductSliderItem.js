import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import appleStoreImage from '../../static/assets/banner-buttons/app-store/asset-appstore-homepage@3x.png';
import googlePlayImage from '../../static/assets/banner-buttons/google-play/asset-playstore-homepage@3x.png';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '5px 10px'
  },
  image: {
    display: 'inline-block !important',
    width: '100%',
    height: 'auto',
    maxWidth: 125
  },
  imageContainer: {
    display: 'inline-block',
    padding: '10px',
    textAlign: 'right',
  },
  title: {
    color: '#FFF',
    fontSize: '2.5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
      overflow: 'hidden'
    }
  },
  appLink: {
    marginTop: 10,
    '& > a': {
      display: 'inline-block',
      maxHeight: 40,
      paddingRight: 5,
      '& > img': {
        maxHeight: 40,
        [theme.breakpoints.down('xs')]: {
          height: 30
        }
      }
    }
  },
  body: {
    color: '#FFF',
    fontSize: '0.8rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6rem',
      overflow: 'hidden',
      maxHeight: 40
    }
  }
}));

function ProductSliderItem({ data }) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.container}
      alignItems="center"
      justify="center"
      alignContent="center"
    >
      <Grid item xs={3} sm={3} className={classes.imageContainer}>
        <img className={classes.image} src={data.imageUrl} alt={data.title} />
      </Grid>
      <Grid container item xs={8} sm={7} md={6} lg={5}>
        <Typography variant="h1" gutterBottom className={classes.title}>
          {data.title}
        </Typography>
        <Typography variant="body1" gutterBottom className={classes.body}>
          {data.description}
        </Typography>
        <div className={classes.appLink}>
          {data.googlePlayUrl && (
            <a href={data.googlePlayUrl} target="__blank">
              <img src={googlePlayImage} alt="GooglePlay Link" />
            </a>
          )}
          {data.appleStoreUrl && (
            <a href={data.appleStoreUrl} target="__blank">
              <img src={appleStoreImage} alt="Apple Store Link" />
            </a>
          )}
        </div>
      </Grid>
    </Grid>
  );
}

ProductSliderItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    googlePlayUrl: PropTypes.string,
    appleStoreUrl: PropTypes.string
  }).isRequired
};

export default React.memo(ProductSliderItem);
