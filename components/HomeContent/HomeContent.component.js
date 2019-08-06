import React from 'react';
import Link from 'next/link';
import {
  Grid,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import {
  useTheme
} from '@material-ui/core/styles';
import { Constants } from '../../constants';

import styles from './HomeContent.styles';

export default function HomeContent() {
  const classes = styles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { HOME_CONTENT } = Constants;

  const Description = () => (
    <>
      <Typography className={classes.description} variant="h6" color="inherit">
        {HOME_CONTENT.DESCRIPTION}
      </Typography>
      <Typography className={classes.knowMoreHereLinkContainer} variant="h6" color="inherit">
        <Link href="#">
          <p className={classes.knowMoreHereLink}>{HOME_CONTENT.MORE_BUTTON}</p>
        </Link>
      </Typography>
    </>
  );

  const HeadDescription = () => (
    <>
      <Typography className={classes.heading} variant="h4" color="inherit">
        {/* <span style={{fontSize: 32}}>{HOME_CONTENT.HEADER}</span> */}
        {HOME_CONTENT.HEADER}
      </Typography>
    </>
  );

  const DescriptionMinified = () => (
    <Link href="/">
      <Typography className={classes.heading} variant="h3" color="inherit">
        <a href="/">{HOME_CONTENT.HEADER}</a>
      </Typography>
    </Link>
  );

  return (
    <Grid container spacing={5} className={classes.container} justify="space-around">
      <Grid item xs={12} lg={4}>
        <Grid container justify="center">
          <div className={classes.imageContainer}>
            {/* <img className={classes.contentImage} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/No_image_available_600_x_450.svg/1200px-No_image_available_600_x_450.svg.png" alt="bulat" /> */}
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Grid container justify="center">
          <Grid item className={classes.contentWording}>
            {/* {mat} */}
            {matches ? <><HeadDescription /> <Description /></> : <DescriptionMinified />}
            {/* <Typography className={classes.description} variant="h6" color="inherit">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography> */}
            {/* <Typography className={classes.knowMoreHereLinkContainer} variant="h6" color="inherit">
              <Link href="#">
                <p className={classes.knowMoreHereLink}>Know More Here -></p>
              </Link>
            </Typography> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
