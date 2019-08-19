import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

//components
import CardPersona from '../Reusable/CardPersona/CardPersona.component';

import styles from './BoostPersonas.styles';

function BoostPersonas({ personas }) {
  const classes = styles();

  return (
    <Container maxWidth="lg" className={classes.container}>
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
    </Container>
  );
}

export default BoostPersonas;
