import React, { useEffect, useRef } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './WhatTheySay.styles';
import Slider from '../Slider';
// import { Constants } from '../../../constants';
import BottomLiner from '../../BottomLiner/BottomLiner.component';

// const { WHATTHEYSAY } = Constants;

const settings = {
  dots: true,
  arrows: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        pauseOnHover: true
      }
    }
  ]
};

function WhatTheySay({ header, testimonials = [] }) {
  const classes = styles();
  const sliderRef = useRef();

  useEffect(() => {
    const slider = sliderRef.current;

    return () => {
      slider && slider.slickPause();
    };
  }, [sliderRef]);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        {header}
      </Typography>
      <BottomLiner />
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((comment, index) => (
          <Card
            component="div"
            className={classes.cards}
            key={comment.description}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.contentContainer}
            >
              <Grid item xs={10} lg={10}>
                <CardContent>
                  <Typography variant="h6" className={classes.commentContainer}>
                    {comment.description}
                  </Typography>
                  <Typography
                    variant="h5"
                    className={classes.usernameContainer}
                  >
                    {comment.title}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        ))}
        <Card className={classes.cards}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.contentContainer}
          >
            <Grid item xs={10} lg={10}>
              <CardContent>
                <Typography variant="h6" className={classes.commentContainer}>
                  Limitless
                </Typography>
                <Typography variant="h5" className={classes.usernameContainer}>
                  -User
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Slider>
    </Container>
  );
}

export default WhatTheySay;
