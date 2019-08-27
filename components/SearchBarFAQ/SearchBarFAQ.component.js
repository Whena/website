import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStyles, BootstrapInput } from './SearchBarFAQ.styles';

export default function SearchBar() {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:960px)');

  const NormalPosition = () => (
    <Grid container direction="row">
      <Grid item>
        <FormControl className={classes.margin}>
          <BootstrapInput
            placeholder="Cari Bantuan"
            id="bootstrap-input"
          />
        </FormControl>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          className={classes.searchButton}
          component="span"
        >
          <span className={classes.buttonText}>Cari</span>
        </Button>
      </Grid>
    </Grid>
  );

  const MinifiedPosition = () => (
    <Grid container direction="column">
      <Grid item xs={12}>
        <FormControl className={classes.margin}>
          <BootstrapInput placeholder="Cari Bantuan" id="bootstrap-input" />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item>
            <Button
              variant="contained"
              className={classes.searchButton}
              component="span"
            >
              <span className={classes.buttonText}>Cari</span>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid
      container
      className={classes.bannerContainer}
      direction="column"
      justify="center"
      alignContent="center"
    >
      <Grid item className={classes.head}>
        <Typography variant="h3" component="h3" gutterBottom>
          <span className={classes.headText}>FAQ</span>
        </Typography>
      </Grid>
      <Grid item>{matches ? <NormalPosition /> : <MinifiedPosition />}</Grid>
    </Grid>
  );
}
