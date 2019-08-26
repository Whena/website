import React, { useRef, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Slider from '../Reusable/Slider';
import HowToSliderItem from './HowToSliderItem';
import BottomLiner from '../BottomLiner/BottomLiner.component';
import HowToSliderNavigation from './HowToSliderNavigation';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8)
  },
  title: {
    fontWeight: 800
  }
}));

const settings = {
  infinite: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  useTransform: false,
  accessibility: false,
  swipeToSlide: false,
  swipe: false
};

function HowToSliderContainer({ sliders = [], title }) {
  const classes = useStyles();
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef();

  const handleChangeSlider = useCallback((index) => {
    if (sliderRef && sliderRef.current && sliderRef.current.slickGoTo) {
      sliderRef.current.slickGoTo(index);
      setSlideIndex(index);
    }
  }, []);

  return (
    <Container className={classes.container}>
      <Typography variant="h4" align="center" className={classes.title}>
        <span>{title}</span>
        <span>
          <BottomLiner />
        </span>
      </Typography>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={7}>
          <Slider {...settings} ref={sliderRef}>
            {sliders.map((slider) => (
              <HowToSliderItem
                imageUrl={slider.image_banner}
                key={slider.title}
              />
            ))}
          </Slider>
        </Grid>
        <Grid item md={5}>
          <HowToSliderNavigation
            current={slideIndex}
            onChange={handleChangeSlider}
            sliders={sliders}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

HowToSliderContainer.propTypes = {
  title: PropTypes.string,
  sliders: PropTypes.arrayOf(PropTypes.object)
};

export default HowToSliderContainer;
