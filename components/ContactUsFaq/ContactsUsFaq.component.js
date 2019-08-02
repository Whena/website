import React from 'react';
import {
  Grid,
  Typography,
  Button,
  useMediaQuery
} from '@material-ui/core';
import { 
  useTheme
} from '@material-ui/core/styles';

import styles from './ContactsUsFaq.styles';

export default function ContactUsFaq() {
  const classes = styles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  // const xsMatches = useMediaQuery(theme.breakpoints.down('xs'));

  const ContactUsButton = () => (
    <Button variant="contained" component="span" className={classes.contactUsButton}>
      <span className={classes.buttonText}>Contact Us Now</span>
    </Button>
  );

  const AnyQuestionButton = () => (
    <Button variant="contained" component="span" className={classes.contactUsButtonMinified}>
      <span className={classes.buttonText}>Any Question?</span>
    </Button>
  );

  const Question = () => (
    <Typography className={classes.wordingContainer} variant="h3" component="h1" gutterBottom>
      <span className={classes.wording}>Still have a question?</span>
    </Typography>
  );

  const ContentContainer = () => (
    <Grid container justify="space-evenly" alignItems="center">
      <Grid item md={7}>
        <Question />
      </Grid>
      <Grid item md={5}>
        <ContactUsButton />
      </Grid>
    </Grid>
  );

  const ContentContainerMinified = () => (
    <Grid container justify="center">
      <Grid item xs={12} style={{textAlign: 'center'}}>
        <AnyQuestionButton />
        {/* <Typography variant="h5" style={{textAlign: 'center'}}>
          <span className={classes.buttonText}>Any Question?</span>
        </Typography> */}
      </Grid>
    </Grid>    
  );

  return (
    <Grid container className={classes.container} justify="center" alignContent="center">
      <Grid item xs={7}>
        {matches ? <ContentContainerMinified /> : <ContentContainer />}
      </Grid>
    </Grid>
  );
}
