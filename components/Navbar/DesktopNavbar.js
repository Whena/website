import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Link from '../Link';
import useStyles from './Navbar.styles';
import { Constants } from '../../constants';

const { NAVBAR_MENU, LANG_CODES } = Constants;

export default function DesktopNavbar() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="default">
      <Toolbar className={classes.toolbarConf}>
        <Grid container spacing={5} justify="space-around" alignItems="center">
          <Grid item xs={1}>
            <Typography
              style={{ marginRight: 45 }}
              variant="h6"
              color="inherit"
            >
              <Button disableRipple className={classes.minifiedLogoButton}>
                <Link href="/">
                  <img
                    className={classes.minifiedLogoConfiguration}
                    src={NAVBAR_MENU[0].BRAND_LOGO}
                    alt={NAVBAR_MENU[0].CAPTION}
                  />
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
                      <Typography
                        className={classes.menus}
                        variant="h6"
                        color="inherit"
                      >
                        <Link className={classes.menuURL} href={menu.URL}>
                          <p className={classes.menuWord}>{menu.NAME}</p>
                        </Link>
                      </Typography>
                    </Grid>
                  );
                }

                return null;
              })}
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={2} justify="center" direction="row">
              <Grid item>
                <Button
                  color="primary"
                  variant="outlined"
                  className={classes.joinAsMerchantButton}
                >
                  <span className={classes.joinAsMerchantWordingSpace}>
                    {NAVBAR_MENU[5].NAME}
                  </span>
                  <ExpandMore className={classes.joinAsMerchantIcon} />
                </Button>
              </Grid>
              <Grid item className={classes.borderLangButton}>
                <Button
                  color="primary"
                  disableRipple
                  className={classes.langButton}
                >
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
}
