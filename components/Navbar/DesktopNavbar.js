import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '../Link';
import useStyles from './Navbar.styles';
import MenuNavbar from './MenuNavbar';
import boostLogo from '../../static/assets/boost_logo/asset-logoboost@3x.png';
import { HeaderMenu, LangList } from '../../constants';

export default function DesktopNavbar() {
  const classes = useStyles();
  const currentLang = 'en';

  const handleChangeLanguage = () => {
    // todo
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar className={classes.toolbarConf}>
        <Grid
          container
          justify="flex-start"
          alignItems="stretch"
          className={classes.navContainer}
        >
          <Grid container justify="flex-start" alignItems="center" item xs={2}>
            <Typography variant="h6" color="inherit">
              <Button disableRipple className={classes.minifiedLogoButton}>
                <Link href="/">
                  <img
                    className={classes.minifiedLogoConfiguration}
                    src={boostLogo}
                    alt="Boost Indonesia"
                  />
                </Link>
              </Button>
            </Typography>
          </Grid>
          <Grid
            item
            xs={8}
            container
            alignItems="center"
            justify="flex-start"
            wrap="nowrap"
          >
            {HeaderMenu.map((menu) => (
              <MenuNavbar
                key={menu.name[currentLang]}
                menu={menu}
                currentLang={currentLang}
              />
            ))}
          </Grid>
          <Grid
            item
            xs={2}
            container
            alignItems="flex-end"
            justify="flex-start"
            wrap="nowrap"
          >
            <MenuNavbar
              menu={LangList}
              currentLang={currentLang}
              onChange={handleChangeLanguage}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
