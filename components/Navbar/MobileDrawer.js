import React, { useState, useCallback } from 'react';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExpandMore from '@material-ui/icons/ExpandMore';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Link from '../Link';
import { Constants } from '../../constants';
import useStyles from './Navbar.styles';
import logoBoost from '../../static/assets/boost_logo/asset-logoboost@3x.png';
import closeImage from '../../static/assets/navbar_toggle_close/ic-close-24-px.png';

const { NAVBAR_MOBILE_MENUS, NAVBAR_JOIN_US, NAVBAR_LANGUAGE } = Constants;

export default function MobileDrawer({ onCloseDrawer }) {
  const classes = useStyles();
  const [collapse, setCollapse] = useState({
    lang: false,
    joinUs: false
  });

  const handleJoinUsToggle = useCallback(() => {
    setCollapse({ ...collapse, joinUs: !collapse.joinUs });
  }, [collapse]);

  const handleLangToggle = useCallback(() => {
    setCollapse({ ...collapse, lang: !collapse.lang });
  }, [collapse]);

  return (
    <div role="presentation">
      <List className={classes.hamburgerList}>
        <Grid
          container
          justify="space-between"
          className={classes.minifiedAppBar}
        >
          <Grid item>
            <Button className={classes.minifiedLogoButton} href="/">
              <img
                className={classes.minifiedLogoConfiguration}
                src={logoBoost}
                alt="logo"
              />
            </Button>
          </Grid>
          <Grid item onClick={onCloseDrawer}>
            <Button disableRipple className={classes.toggleContainer}>
              <img
                className={classes.toggleCloseNavbar}
                src={closeImage}
                alt="close toggle"
              />
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
          return null;
        })}
        <ListItem button onClick={handleJoinUsToggle}>
          <ListItemText primary={NAVBAR_MOBILE_MENUS[4].NAME} />
          {collapse.joinUs ? <ExpandMore /> : <KeyboardArrowRight />}
        </ListItem>
        <Collapse in={collapse.joinUs} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {NAVBAR_JOIN_US.map((button, index) => (
              <ListItem key={button.MENU} button className={classes.nested}>
                <ListItemIcon>
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      backgroundColor: '#d8d8d8'
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={button.MENU} />
              </ListItem>
            ))}
          </List>
        </Collapse>
        <ListItem button onClick={handleLangToggle}>
          <ListItemText primary={NAVBAR_MOBILE_MENUS[5].NAME} />
          {collapse.lang ? <ExpandMore /> : <KeyboardArrowRight />}
        </ListItem>
        <Collapse in={collapse.lang} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {NAVBAR_LANGUAGE.map((menu) => (
              <ListItem key={menu.MENU} button className={classes.nested}>
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
}
