import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '../Reusable/Slider';
import Hidden from '@material-ui/core/Hidden';

//components
import CardPersona from '../Reusable/CardPersona/CardPersona.component';

import styles from './BoostPersonas.styles';

const settings = {
  arrows: false,
  dots: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 2,
  slidesToScroll: 1
};

function BoostPersonas({ personas }) {
  const classes = styles();

  const MobileLayoutPersonas = () => (
    <Slider {...settings} className={classes.slider}>
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
  );

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Hidden only={['xs']}>
        <Typography className={classes.title}>
          Personas
        </Typography>
        <Grid container justify="space-around">
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
        </Grid>
      </Hidden>
      <Hidden implementation="css" smUp>
        <Typography className={classes.title}>
          Personas
        </Typography>
        <MobileLayoutPersonas />
      </Hidden>
    </Container>
  );
}

export default BoostPersonas;
