import React, { useEffect, useRef } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '../Reusable/Slider';
import Hidden from '@material-ui/core/Hidden';

//components
import CardPersona from '../Reusable/CardPersona/CardPersona.component';

import styles from './BoostPersonas.styles';

let settings = {
  arrows: false,
  dots: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        centerMode: true
      }
    }
  ]
};

const MobileLayoutPersonas = ({ personas }) => {
  const classes = styles();
  const sliderRef = useRef();

  useEffect(() => {
    return () => {
      sliderRef && sliderRef.current.slickPause()
    }
  }, []);

  return (
    <Slider ref={sliderRef} {...settings} className={classes.slider}>
      {personas.map((eachPersona) => (
        <Grid item xs={12} sm={6} md={3} className={classes.eachCard} key={eachPersona.persona}>
          <CardPersona
            icon={eachPersona.icon}
            persona={eachPersona.persona}
            description={eachPersona.description}
            actionURL={eachPersona.action_url}
          />
        </Grid>
      ))}
    </Slider>
  )
};

const PersonaCards = ({ personas = [] }) => {
  const classes = styles();

  return personas.map((eachPersona) => (
    <Grid item xs={12} sm={6} md={3} className={classes.eachCard} key={eachPersona.persona}>
      <CardPersona
        icon={eachPersona.icon}
        persona={eachPersona.persona}
        description={eachPersona.description}
        actionURL={eachPersona.action_url}
      />
    </Grid>
  ))
};

const Title = () => {
  const classes = styles();

  return (
    <Typography className={classes.title}>
      Personas
    </Typography>
  )
};

function BoostPersonas({ personas }) {
  const classes = styles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Title />
      <Hidden only="xs">
        <Grid container justify="space-around">
          <PersonaCards 
            personas={personas}
          />
        </Grid>
      </Hidden>
      <Hidden implementation="css" smUp>
        <MobileLayoutPersonas personas={personas} />
      </Hidden>
    </Container>
  );
}

export default BoostPersonas;
