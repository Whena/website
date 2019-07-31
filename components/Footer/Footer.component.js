import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Material components
import { Typography, Box, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

// Externals
import cx from 'clsx';

// Component styles
const useStyles = makeStyles(theme => ({
  company: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  headingFooter: {
    fontWeight: 700,
    marginBottom: theme.spacing(4),
  },
  textFooter: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  image: {
    height: 52,
    // marginRight: theme.spacing(8),
  }
}));

function Footer() {
  const classes = useStyles();
  // <Box px={8} py={8}>
  return (
    <Container maxWidth="lg">
      <Box mt={10}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={3}>
            <div>
              <Typography variant="h4" className={classes.headingFooter}>INFORMATION</Typography>
              <Typography variant="h5" className={classes.textFooter}>Our Contacts</Typography>
              <Typography variant="h5" className={classes.textFooter}>Career</Typography>
              <Typography variant="h5" className={classes.textFooter}>Media Gallery</Typography>
              <Typography variant="h5" className={classes.textFooter}>FAQs</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <div>
              <Typography variant="h4" className={cx(classes.headingFooter)}>SERVICES</Typography>
              <Typography variant="h5" className={classes.textFooter}>BoostPlay</Typography>
              <Typography variant="h5" className={classes.textFooter}>BoostPenjual</Typography>
              <Typography variant="h5" className={classes.textFooter}>BoostPreneur</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <div>
              <Typography variant="h4" className={classes.headingFooter}>
                SOCIAL MEDIA
              </Typography>
              <img src="/static/Socmed.png" className={classes.image} alt="facebook"/>
              <img src="/static/Socmed.png" className={classes.image} alt="instagram"/>
              <img src="/static/Socmed.png" className={classes.image} alt="twitter"/>

            </div>
          </Grid>
        </Grid>
        <Box py={4}>
          <div>
            <Typography
              className={classes.company}
              variant="h4"
              align="right"
            >
              #NGEBOOSTBENTAR
            </Typography>
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default Footer;