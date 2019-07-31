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
  const contentConfiguration = matches ? 'center' : 'space-evenly';
  const wordingConfiguration = matches ? 'center' : 'flex-start';

  const ContactUsButton = () => (
    <Grid item xs={6} md={4}>
      <Button variant="contained" component="span" className={classes.contactUsButton}>
        <span className={classes.buttonText}>Contact Us Now</span>
      </Button>
    </Grid>
  );

  return (
    <Grid container className={classes.container} justify="center" alignContent="center">
      <Grid item xs={7}>
        <Grid container justify="space-evenly" alignContent="center">
          <Grid item xs={12} md={8}>
            <Typography className={classes.wordingContainer} variant="h3" component="h1" gutterBottom>
              <span className={classes.wording}>Still have a question?</span>
            </Typography>
          </Grid>
          {/* {matches ? <></> : <ContactUsButton />} */}
          <ContactUsButton />
        </Grid>
      </Grid>
    </Grid>
  );
}
