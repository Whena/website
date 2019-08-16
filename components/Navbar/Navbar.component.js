import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import { useRouter } from 'next/router'

import Menu from '@material-ui/icons/Menu';
import ExpandMore from '@material-ui/icons/ExpandMore';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import Link from '../Link';
import { Constants } from '../../constants';

import styles from './Navbar.styles';

export default function SimpleAppBar() {
  const classes = styles();
  const matches = useMediaQuery('(min-width:1000px)');
  const {
    NAVBAR_MENU,
    // LANGUAGE,
    LANG_CODES,
    NAVBAR_LANGUAGE,
    NAVBAR_JOIN_US,
    NAVBAR_MOBILE_MENUS
  } = Constants;
  // const router = useRouter();

  const [joinUsToggle, setjoinUsToggle] = useState(false);
  const [langToggle, setLangToggle] = useState(false);
  const [state, setState] = useState(false);

  const handleJoinUsToggle = () => {
    setjoinUsToggle(!joinUsToggle);
  };

  const handleLangToggle = () => {
    setLangToggle(!langToggle);
  };

  const openDrawer = () => {
    setState(true);
  };

  const closeDrawer = () => {
    setState(false);
  };

  const BurgerList = () => (
    <div role="presentation">
      <List className={classes.hamburgerList}>
        <Grid container justify="space-between" className={classes.minifiedAppBar}>
          <Grid item>
            <Button className={classes.minifiedLogoButton} href="/">
              <img className={classes.minifiedLogoConfiguration} src="/static/assets/boost_logo/asset-logoboost@3x.png" alt="logo" />
            </Button>
          </Grid>
          <Grid item onClick={closeDrawer}>
            <Button disableRipple className={classes.toggleContainer}>
              <img className={classes.toggleCloseNavbar} src="/static/assets/navbar_toggle_close/ic-close-24-px.png" alt="close toggle" />
            </Button>
          </Grid>
        </Grid>
        {NAVBAR_MOBILE_MENUS.map((menu, index) => {
          if (index < 4) {
            return (
              <Link key={menu.NAME} href={menu.URL}>
                <ListItem button key={menu.NAME}>
                  <ListItemText primary={menu.NAME} />
                </ListItem>
              </Link>
            );
          }
        })}

        <ListItem button onClick={handleJoinUsToggle}>
          <ListItemText primary={NAVBAR_MOBILE_MENUS[4].NAME} />
          {joinUsToggle ? <ExpandMore /> : <KeyboardArrowRight />}
        </ListItem>
        <Collapse in={joinUsToggle} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {NAVBAR_JOIN_US.map((button, index) => (
              <ListItem key={button.MENU} button className={classes.nested}>
                <ListItemIcon>
                  <div style={{ width: 24, height: 24, backgroundColor: '#d8d8d8'}}></div>
                </ListItemIcon>
                <ListItemText primary={button.MENU} />
              </ListItem>
            ))}
          </List>
        </Collapse>

        <ListItem button onClick={handleLangToggle}>
          <ListItemText primary={NAVBAR_MOBILE_MENUS[5].NAME} />
          {langToggle ? <ExpandMore /> : <KeyboardArrowRight />}
        </ListItem>
        <Collapse in={langToggle} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {NAVBAR_LANGUAGE.map((menu, index) => (
              <ListItem key={index} button className={classes.nested}>
                <ListItemIcon>
                  <img src={menu.ICON} alt={menu.MENU} />
                </ListItemIcon>
                <ListItemText primary={menu.MENU} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </div>
  );

  const minisizeNavbar = () => {
    return (
      <AppBar position="static" color="default" className={classes.minifiedAppBar}>
        <Toolbar className={classes.toolbarConf}>
          <Grid container spacing={5} justify="space-between" alignItems="center">
            <Grid item xs={1}>
              <Button disableRipple className={classes.minifiedLogoButton} href="/">
                <img className={classes.minifiedLogoConfiguration} src={NAVBAR_MENU[0].BRAND_LOGO} alt={NAVBAR_MENU[0].CAPTION} />
              </Button>
            </Grid>
            <Grid item>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={openDrawer}>
                <Menu />
              </IconButton>
              <Drawer anchor="left" open={state}>
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
                <Button disableRipple className={classes.minifiedLogoButton}>
                  <Link href="/">
                    <img className={classes.minifiedLogoConfiguration} src={NAVBAR_MENU[0].BRAND_LOGO} alt={NAVBAR_MENU[0].CAPTION} />
                  </Link>
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="space-around">
                {NAVBAR_MENU.map((menu, index) => {
                  if (index > 0 && index < 5) {
                    return (
                      <Grid item key={menu.NAME}>
                        <Typography className={classes.menus} variant="h6" color="inherit">
                          <Link className={classes.menuURL} href={menu.URL}>
                            <p className={classes.menuWord}>{menu.NAME}</p>
                          </Link>
                        </Typography>
                      </Grid>
                    );
                  }
                })}
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={2} justify="center" direction="row">
                <Grid item>
                  <Button color="primary" variant="outlined" className={classes.joinAsMerchantButton}>
                    <span className={classes.joinAsMerchantWordingSpace}>{NAVBAR_MENU[5].NAME}</span>
                    {/* <img src="https://img.icons8.com/ios/15/000000/expand-arrow--v2.png" alt="down-arrow-icon" /> */}
                    <ExpandMore className={classes.joinAsMerchantIcon} />
                  </Button>
                </Grid>
                <Grid item className={classes.borderLangButton}>
                  <Button color="primary" disableRipple className={classes.langButton} >
                    <span className={classes.langText}>{LANG_CODES.LANG_1}</span>
                    <ExpandMore />
                  </Button>
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
