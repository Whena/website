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
  // Divider,
  ListItem,
  ListItemText
} from '@material-ui/core';
// import {
// useTheme
// } from '@material-ui/core/styles';
import {
  Menu,
} from '@material-ui/icons';
import Link from 'next/link';

import styles from './Navbar.styles';

export default function SimpleAppBar() {
  const classes = styles();
  // const theme = useTheme();
  const matches = useMediaQuery('(min-width:1000px)');

  const [state, setState] = useState({
    open: false
  });

  const toggleDrawer = (toggleOpen) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({
      open: toggleOpen
    });
  };

  const list = () => {
    return (
      <div
        // className={classes.list}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {['About Us', 'Services', 'Blog', 'FAQ'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <p>hehe</p> : <p>123123</p>}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  };

  const minisizeNavbar = () => {
    return (
      <AppBar position="static" color="default">
        <Toolbar className={classes.toolbarConf}>
          <Grid container spacing={5} justify="space-between" alignItems="center">
            <Grid item xs={1}>
              <Typography style={{marginRight: 45}} variant="h6" color="inherit">
                Boost
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <Menu />
              </IconButton>
              <Drawer anchor="top" open={state.open} onClose={toggleDrawer(false)}>
                {list()}
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
                Boost
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="space-around">
                <Grid item>
                  <Typography className={classes.menus} variant="h6" color="inherit">
                    <Link href="#">
                      <p className={classes.menuWord}>About Us</p>
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.menus} variant="h6" color="inherit">
                    <Link href="#">
                      <p className={classes.menuWord}>Service</p>
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.menus} variant="h6" color="inherit">
                    <Link href="#">
                      <p className={classes.menuWord}>Blog</p>
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.menus} variant="h6" color="inherit">
                    <Link href="#">
                      <p className={classes.menuWord}>FAQ</p>
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
                        <img src="https://img.icons8.com/ios/25/000000/expand-arrow--v2.png" alt="down-arrow-icon" />
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
    );
  };

  return (
    <div className={classes.root}>
      {matches ? normalNavbar() : minisizeNavbar()}
    </div>
  );
}