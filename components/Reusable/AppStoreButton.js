import React from 'react';
import clsx from 'clsx';
import appleStoreImage from '../../static/assets/banner-buttons/app-store/asset-appstore-homepage@3x.png';
import { useStyles } from './GooglePlayButton';

export default function AppStoreButton({ url = '#!', className, ...props }) {
  const classes = useStyles();
  return (
    <a
      href={url}
      target="__blank"
      className={clsx(className, classes.link)}
      {...props}
    >
      <img src={appleStoreImage} alt="AppStore Link" className={classes.img} />
    </a>
  );
}
