import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Grid, 
  Typography, 
  Button ,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import {
  Menu,
} from '@material-ui/icons';
import Link from 'next/link';
import { Constants } from '../../Constants';

import styles from './Navbar.styles';

export default function SimpleAppBar() {
  const classes = styles();
  // const theme = useTheme();
  const matches = useMediaQuery('(min-width:1000px)');
  const { NAVBAR, LANGUAGE, LANG_CODES } = Constants;

  const [state, setState] = useState({
    open: false
  });

  const menus = [{
    name: NAVBAR.MENU_1,
    url: '/aboutus'
  }, {
    name: NAVBAR.MENU_2,
    url: '/services'
  }, {
    name: NAVBAR.MENU_3,
    url: '/blog'
  }, {
    name: NAVBAR.MENU_4,
    url: '/faq'
  }, {
    name: NAVBAR.BUTTON_LEFT,
    url: '/'
  }, {
    name: LANGUAGE.LANG_1,
    url: '/'
  }];

  const toggleDrawer = (toggleOpen) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({
      open: toggleOpen
    });
  };

  const BurgerList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menus.map((menu, index) => (
          <Link href={menu.url}>
            <ListItem button key={index}>
              <ListItemText primary={menu.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const minisizeNavbar = () => {
    return (
      <AppBar position="static" color="default">
        <Toolbar className={classes.toolbarConf}>
          <Grid container spacing={5} justify="space-between" alignItems="center">
            <Grid item xs={1}>
              <Typography style={{marginRight: 45}} variant="h6" color="inherit">
                {NAVBAR.BRAND_LOGO}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <Menu />
              </IconButton>
              <Drawer anchor="top" open={state.open} onClose={toggleDrawer(false)}>
                <BurgerList />
              </Drawer>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  };

  const normalNavbar = () => {
    return (
      <AppBar position="static" color="default">
        <Toolbar className={classes.toolbarConf}>
          <Grid container spacing={5} justify="space-around" alignItems="center">
            <Grid item xs={1}>
              <Typography style={{marginRight: 45}} variant="h6" color="inherit">
                <Link href="/">
                  <a href="/">{NAVBAR.BRAND_LOGO}</a>
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="space-around">
                <Grid item>
                  <Typography className={classes.menus} variant="h6" color="inherit">
                    <Link href="#">
                      <p className={classes.menuWord}>{NAVBAR.MENU_1}</p>
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.menus} variant="h6" color="inherit">
                    <Link href="#">
                      <p className={classes.menuWord}>{NAVBAR.MENU_2}</p>
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.menus} variant="h6" color="inherit">
                    <Link href="#">
                      <p className={classes.menuWord}>{NAVBAR.MENU_3}</p>
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.menus} variant="h6" color="inherit">
                    <Link href="/faq">
                      <p className={classes.menuWord}>{NAVBAR.MENU_4}</p>
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
                      <Button color="primary" variant="outlined" className={classes.joinAsMerchantButton}>
                        <span className={classes.joinAsMerchantWordingSpace}>{NAVBAR.BUTTON_LEFT}</span>
                        <img src="https://img.icons8.com/ios/25/000000/expand-arrow--v2.png" alt="down-arrow-icon" />
                      </Button>
                    </Grid>
                    {/* <Grid item>
                      <img src="https://img.icons8.com/ios/30/000000/vertical-line.png" alt="vertical icon" style={{height: 100}} />
                    </Grid> */}
                    <Grid item className={classes.borderLangButton}>
                      <Button color="primary" className={classes.langButton} >
                        <span className={classes.langText}>{LANG_CODES.LANG_1}</span>
                        <img src="https://img.icons8.com/ios/25/000000/expand-arrow--v2.png" alt="down-arrow-icon" />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  };

  return (
    <div className={classes.root}>
      {matches ? normalNavbar() : minisizeNavbar()}
    </div>
  );
}
