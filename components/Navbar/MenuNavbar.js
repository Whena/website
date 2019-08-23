import React, { useCallback, useState } from 'react';
import Popper from '@material-ui/core/Popper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import getLodash from 'lodash/get';
import Link from '../Link';
import useSyles from './Navbar.styles';

export default function MenuNavbar({
  menu,
  currentLang = 'en',
  onClickSubMenu
}) {
  const classes = useSyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenSubMenu = useCallback((event) => {
    setAnchorEl((prevState) => (prevState ? null : event.currentTarget));
  }, []);

  const handleCloseSubMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleClickSubMenu = useCallback(
    (event) => {
      onClickSubMenu &&
        onClickSubMenu(getLodash(event, 'currentTarget.dataset.menu', {}));
    },
    [onClickSubMenu]
  );

  if (menu.nodes) {
    const openSubMenu = Boolean(anchorEl);
    const popperId = openSubMenu
      ? `sub-menu-${menu.name[currentLang].replace(' ', '-')}`
      : undefined;

    return (
      <>
        <span
          className={classes.menuURL}
          aria-describedby={popperId}
          onClick={handleOpenSubMenu}
          onKeyPress={handleOpenSubMenu}
          tabIndex="0"
          role="button"
        >
          {menu.icon && (
            <div className={classes.leftIcon}>
              <img src={menu.icon} className={classes.iconMenu} alt="" />
            </div>
          )}
          <div className={classes.menu}>{menu.name[currentLang]}</div>
          {openSubMenu ? <ExpandLess /> : <ExpandMore />}
        </span>
        <Popper
          className={classes.poppperMenu}
          open={openSubMenu}
          anchorEl={anchorEl}
          id={popperId}
          placement="bottom-end"
          transition
        >
          {({ TransitionProps }) => (
            <ClickAwayListener onClickAway={handleCloseSubMenu}>
              <Grow {...TransitionProps}>
                <Paper>
                  <MenuList disablePadding>
                    {menu.nodes.map((node, index) => (
                      <Link
                        href={node.url || '#!'}
                        className={classes.subLink}
                        key={node.name[currentLang]}
                      >
                        <MenuItem
                          disableRipple
                          disableTouchRipple
                          divider={index < menu.nodes.length - 1}
                          onClick={handleClickSubMenu}
                          data-menu={node.id}
                        >
                          {node.icon && (
                            <ListItemIcon>
                              <img
                                src={node.icon}
                                className={classes.iconMenu}
                                alt=""
                              />
                            </ListItemIcon>
                          )}
                          {node.name[currentLang]}
                        </MenuItem>
                        {index === 0 && (
                          <span className={classes.popperArrow} />
                        )}
                      </Link>
                    ))}
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          )}
        </Popper>
      </>
    );
  }

  return (
    <Link className={classes.menuURL} href={menu.url}>
      <div className={classes.menu}>{menu.name[currentLang]}</div>
    </Link>
  );
}
