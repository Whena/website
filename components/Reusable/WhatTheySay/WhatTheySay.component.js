import React from 'react';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Slider from 'react-slick';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './WhatTheySay.styles';
import { Constants } from '../../../constants';
import BottomLiner from '../../BottomLiner/BottomLiner.component';

const { WHATTHEYSAY } = Constants;

function WhatTheySay(props) {
  const classes = styles();
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Typography variant="h4" className={classes.title}>
        What they say?
      </Typography>
      <BottomLiner />
      <Slider {...settings}>
        {WHATTHEYSAY.map((comment, index) => (
          <Card key={index} className={classes.cards}>
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.contentContainer}
            >
              <Grid item xs={10}>
                <CardContent>
                  <Typography variant="h6" className={classes.commentContainer}>
                    {comment.TESTIMONIAL}
                  </Typography>
                  <Typography
                    variant="h5"
                    className={classes.usernameContainer}
                  >
                    - {comment.USER}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Slider>
    </Container>
  );
}

export default WhatTheySay;
