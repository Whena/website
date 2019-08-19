import React, { useState, useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './Navbar.styles';
import MobileDrawer from './MobileDrawer';
import { Constants } from '../../constants';

export default function MobileNavbar() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = useCallback(() => {
    setOpenDrawer(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setOpenDrawer(false);
  }, []);

  return (
    <AppBar
      position="static"
      color="default"
      className={classes.minifiedAppBar}
    >
      <Toolbar className={classes.toolbarConf}>
        <Grid container spacing={5} justify="space-between" alignItems="center">
          <Grid item xs={1}>
            <Button
              disableRipple
              className={classes.minifiedLogoButton}
              href="/"
            >
              <img
                className={classes.minifiedLogoConfiguration}
                src={Constants.NAVBAR_MENU[0].BRAND_LOGO}
                alt={Constants.NAVBAR_MENU[0].CAPTION}
              />
            </Button>
          </Grid>
          <Grid item>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleOpenDrawer}
            >
              <Menu />
            </IconButton>
            <Drawer anchor="left" open={openDrawer}>
              <MobileDrawer onCloseDrawer={handleCloseDrawer} />
            </Drawer>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
