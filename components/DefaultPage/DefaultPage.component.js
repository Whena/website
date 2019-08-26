import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '../Link';

import PropTypes from 'prop-types';
import styles from './DefaultPage.styles';

function DefaultPage({ 
  imageURL,
  title,
  description,
  button
}) {
  const classes = styles();
  
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container>
        <Grid item xs={12} md={5} lg={4} className={classes.leftComponent}>
          <img src={imageURL} alt={title} width="143px" />
        </Grid>
        <Grid item xs={12} md={7} lg={7} className={classes.rightComponent}>
          <Typography variant="h3" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="h6" className={classes.description}>
            {description}
          </Typography>
          <Link href="/" className={classes.linkButton}>
            <Button variant="outlined" className={classes.button}>
              <Typography className={classes.buttonText}>{button}</Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>    
  );
}

DefaultPage.propTypes = {
  imageURL: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.string
};

export default DefaultPage;
