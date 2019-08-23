import React, { Fragment, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Link from '../Link';

const styles = (theme) => ({
  root: {
    '&$selected': {
      backgroundColor: theme.palette.action.hover
    },
    '&:hover, &$open': {
      color: '#ee3124',
      backgroundColor: 'transparent !important'
    }
  },
  open: {},
  leftIcon: {
    marginRight: 5,
    '& > img': {
      maxWidth: 24
    }
  },
  selected: {},
  wrapText: {
    whiteSpace: 'normal',
    fontSize: 16,
    fontWeight: 'normal'
  },
  defaultIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#d8d8d8',
    borderRadius: '50%'
  }
});

const NestedListItem = withStyles(styles)(function(props) {
  const {
    isChild,
    url,
    id,
    name,
    nodes,
    icon,
    onClickMenu,
    classes,
    lang
  } = props;

  let handleClick, expandIcon, collapseComponent;
  let listProps = { button: true };
  const hasNodes = Array.isArray(nodes) && nodes.length > 0;
  const [open, setOpen] = useState(false);

  if (hasNodes) {
    handleClick = useCallback(() => setOpen((open) => !open), []);
    expandIcon = open ? <ExpandLess /> : <ExpandMore />;
    collapseComponent = open && (
      <CollapseListItem
        open={open}
        nodes={nodes}
        lang={lang}
        onClickMenu={onClickMenu}
      />
    );
    listProps = {
      ...listProps,
      onClick: handleClick
    };
  } else if (url) {
    listProps = {
      ...listProps,
      component: React.forwardRef((props, ref) => (
        <Link {...props} innerRef={ref} />
      )),
      href: url || '#!'
    };
  }

  const handleClickMenu = useCallback(() => {
    onClickMenu && onClickMenu(id);
  }, [onClickMenu, id]);

  return (
    <Fragment>
      <ListItem
        disableRipple
        disableTouchRipple
        selected={open}
        onClick={handleClickMenu}
        classes={{ root: classes.root, selected: classes.open }}
        {...listProps}
      >
        {isChild && (
          <div className={classes.leftIcon}>
            {icon && <img src={icon} className={classes.iconMenu} alt="" />}
          </div>
        )}
        <ListItemText
          primary={name[lang]}
          title={name[lang]}
          disableTypography
          className={classes.wrapText}
        />
        {expandIcon}
      </ListItem>
      {collapseComponent}
    </Fragment>
  );
});

function CollapseListItem({ lang, open, nodes, onClickMenu }) {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {nodes.map((node) => (
          <NestedListItem
            isChild
            key={node.name[lang]}
            {...node}
            lang={lang}
            onClickMenu={onClickMenu}
          />
        ))}
      </List>
    </Collapse>
  );
}

const itemType = {
  name: PropTypes.object.isRequired,
  icon: PropTypes.elementType
};

NestedListItem.propTypes = {
  ...itemType,
  nodes: PropTypes.arrayOf(PropTypes.shape(itemType)),
  onClickMenu: PropTypes.func
};

export default NestedListItem;
