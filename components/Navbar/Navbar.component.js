import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

import styles from './Navbar.styles'

export default function SimpleAppBar() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbarSettings} position="static" color="default">
        <Toolbar className={classes.toolbarConf}>
          <Grid container spacing={5} justify="space-around" alignItems="center">
            <Grid item xs={1}>
              <Typography style={{marginRight: 45}} variant="h6" color="inherit">
                Boost
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="space-around">
                <Grid item>
                  <Typography className={classes.menus} variant="h6" color="inherit">
                    <Link href="#">
                      <a className={classes.menuWord}>About Us</a>
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.menus} variant="h6" color="inherit">
                    <Link href="#">
                      <a className={classes.menuWord}>Services</a>
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.menus} variant="h6" color="inherit">
                    <Link href="#">
                      <a className={classes.menuWord}>Blog</a>
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.menus} variant="h6" color="inherit">
                    <Link href="#">
                      <a className={classes.menuWord}>FAQ</a>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={2} justify="center" direction="column">
                <Grid item>
                  <Grid container justify="space-between">
                    <Grid item>
                      <Button color="primary" variant="contained" className={classes.joinAsMerchantButton}>
                        <span className={classes.joinAsMerchantWordingSpace}>Join As Merchant</span>
                        <img src="https://img.icons8.com/ios/25/000000/expand-arrow--v2.png"></img>
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button color="primary" className={classes.langButton} variant="contained">
                        ENG
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}