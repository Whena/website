import React, { useCallback, useContext } from 'react';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MobileMenuNavbar from './MobileMenuNavbar';
import { LangList, HeaderMenu } from '../../constants';
import useStyles from './Navbar.styles';
import logoBoost from '../../static/assets/boost_logo/asset-logoboost@3x.png';
import closeImage from '../../static/assets/navbar_toggle_close/ic-close-24-px.png';
import { LayoutContext } from '../../utils/context';
import { setLanguage } from '../../utils/helpers';
import PropTypes from 'prop-types';

function MobileDrawer({ 
  onCloseDrawer 
}) {
  const classes = useStyles();
  const appLayout = useContext(LayoutContext);

  const handleChangeLanguage = useCallback((id) => {
    setLanguage(id);
    window && window.location.reload();
  }, []);

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
        {HeaderMenu.map((menu) => (
          <MobileMenuNavbar
            key={menu.name[appLayout.lang]}
            lang={appLayout.lang}
            {...menu}
          />
        ))}
        <MobileMenuNavbar
          key={LangList.name[appLayout.lang]}
          lang={appLayout.lang}
          onClickMenu={handleChangeLanguage}
          {...LangList}
        />
      </List>
    </div>
  );
}

MobileDrawer.propTypes = {
  onCloseDrawer: PropTypes.func
};

export default MobileDrawer;
