import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
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


function HowToSliderContainer({ sliders = [], title }) {
  const classes = useStyles();
  const [slideIndex, setSlideIndex] = useState(0);

  const handleChangeSlider = useCallback((index) => {
    setSlideIndex(index);
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
        <Grid container item xs={12} md={7}>
          {sliders.map((slider, index) => (
            <Fade in={index === slideIndex} key={slider.title}>
              <HowToSliderItem
                hidden={index !== slideIndex}
                imageUrl={slider.image_banner}
              />
            </Fade>
          ))}
        </Grid>
        <Grid item xs={12} md={5}>
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
