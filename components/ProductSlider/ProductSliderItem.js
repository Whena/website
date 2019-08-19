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
    maxWidth: 200
  },
  imageContainer: {
    display: 'inline-block',
    padding: '10px',
    textAlign: 'right',
    [theme.breakpoints.up('sm')]: {
      marginRight: 30
    }
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    color: '#FFF',
    fontSize: '3rem',
    fontWeight: '900',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
      fontWeight: '700',
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
          height: 20
        }
      }
    }
  },
  body: {
    color: '#FFF',
    fontSize: '1.5rem',
    display: '-webkit-box',
    '-webkit-line-clamp': 5,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.75rem',
      maxHeight: 100
    }
  }
}));

function ProductSliderItem(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.container}
      alignItems="stretch"
      justify="center"
    >
      <Grid item xs={3} sm={3} className={classes.imageContainer}>
        <img className={classes.image} src={props.imageUrl} alt={props.title} />
      </Grid>
      <Grid
        item
        xs={8}
        sm={7}
        md={6}
        lg={5}
        className={classes.descriptionContainer}
      >
        <Typography variant="h1" gutterBottom className={classes.title}>
          {props.title}
        </Typography>
        <Typography variant="body1" gutterBottom className={classes.body}>
          {props.description}
        </Typography>
        <div className={classes.appLink}>
          {props.googlePlayUrl && (
            <a href={props.googlePlayUrl} target="__blank">
              <img src={googlePlayImage} alt="GooglePlay Link" />
            </a>
          )}
          {props.appleStoreUrl && (
            <a href={props.appleStoreUrl} target="__blank">
              <img src={appleStoreImage} alt="Apple Store Link" />
            </a>
          )}
        </div>
      </Grid>
    </Grid>
  );
}

ProductSliderItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  googlePlayUrl: PropTypes.string,
  appleStoreUrl: PropTypes.string
};

export default React.memo(ProductSliderItem);
