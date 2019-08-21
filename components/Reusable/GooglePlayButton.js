import React from 'react';
import clsx from 'clsx';
import googlePlayImage from '../../static/assets/banner-buttons/google-play/asset-playstore-homepage@3x.png';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  img: {
    width: 'auto',
    height: '100%'
  },
  link: {
    display: 'inline-block'
  }
}));

export default function GooglePlayButton({ url = '#!', className, ...props }) {
  const classes = useStyles();
  return (
    <a
      href={url}
      target="__blank"
      className={clsx(className, classes.link)}
      {...props}
    >
      <img
        src={googlePlayImage}
        alt="GooglePlay Link"
        className={classes.img}
      />
    </a>
  );
}
