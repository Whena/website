import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'clsx';
import backgroundImage from '../../static/assets/bg-section-5-homepage.svg';

function BackgroundProductSlider({ className, ...props }) {
  const classes = useStyles();
  return (
    <div className={classNames(classes.background, className)} {...props} />
  );
}

const useStyles = makeStyles((theme) => ({
  background: {
    marginBottom: 15,
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: '100px 0',
    backgroundOrigin: 'content-box',
    [theme.breakpoints.down('lg')]: {
      padding: '37px 0'
    },
    [theme.breakpoints.down('md')]: {
      padding: '0'
    }
  }
}));

export default BackgroundProductSlider;
