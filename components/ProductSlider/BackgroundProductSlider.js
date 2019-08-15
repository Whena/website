import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import backgroundImage from '../../static/assets/bg-section-5-homepage.svg';

function BackgroundProductSlider({ className, ...props }) {
  const classes = useStyles();
  return (
    <div className={classNames(classes.background, className)} {...props} />
  );
}

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: '100px 0',
    backgroundOrigin: 'content-box',
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  }
}));

export default BackgroundProductSlider;
