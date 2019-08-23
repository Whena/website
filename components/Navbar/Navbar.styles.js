import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 80,
    width: '100%',
    position: 'fixed',
    zIndex: theme.zIndex.appBar
  },
  iconMenu: {
    height: 24
  },
  leftIcon: {
    minWidth: 30,
    display: 'flex'
  },
  poppperMenu: {
    zIndex: theme.zIndex.appBar + 1,
    top: '-15px !important',
    left: '-4px !important'
  },
  subLink: {
    '& li': {
      fontSize: 16,
      fontWeight: 500
    },
    '& li:hover': {
      backgroundColor: 'transparent',
      color: '#ee3124'
    }
  },
  popperArrow: {
    '&:after': {
      top: '-10px',
      right: '2px',
      content: "''",
      display: 'block',
      zIndex: '1',
      position: 'absolute',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderBottom: '10px solid #FFF',
      width: '0',
      height: '0'
    }
  },
  minifiedAppBar: {
    paddingBottom: 10,
    borderBottom: '1px solid rgb(220, 68, 51)'
  },
  menu: {
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginRight: 5,
    whiteSpace: 'nowrap',
    '&:focus': {
      outline: 'none'
    }
  },
  navContainer: {
    height: '100%'
  },
  menuURL: {
    height: '100%',
    margin: '0 22px !important',
    fontSize: '16px',
    fontWeight: '600',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      cursor: 'pointer'
    },
    '&:hover': {
      color: 'red'
    },
    '&:focus': {
      outline: 'none'
    }
  },
  joinAsMerchantIcon: {
    color: 'rgb(220, 68, 51)'
  },
  joinAsMerchantButton: {
    height: 42,
    width: 200,
    textTransform: 'none',
    fontSize: 20,
    border: '2px solid rgb(220, 68, 51)',
    marginRight: 20,

    '&:hover': {
      backgroundColor: '#fff',
      border: '2px solid rgb(220, 68, 51)'
    }
  },
  joinAsMerchantWordingSpace: {
    marginRight: 10,
    color: 'rgb(220, 68, 51)',
    fontSize: 16
  },
  langButton: {
    width: 80,
    backgroundColor: 'transparent',
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 800,
    color: '#000',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  borderLangButton: {
    borderLeft: '2px solid rgb(70,70,70)'
  },
  menuWord: {
    textDecoration: 'none',
    color: '#565e6b',
    // textTransform: 'uppercase',
    fontSize: 16,
    '&:hover': {
      color: 'red'
    }
  },
  toolbarConf: {
    height: 80
  },
  langText: {
    fontSize: 14,
    marginRight: 10
  },
  minifiedLogoConfiguration: {
    height: 31,
    marginLeft: 10
  },
  minifiedLogoButton: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  toggleCloseNavbar: {
    height: 24
  },
  toggleContainer: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  hamburgerList: {
    width: '100vw'
  },
  loaderColor: {
    backgroundColor: '#dc004e'
  },
  loaderContainer: {
    position: 'absolute',
    width: '100%'
  }
}));

export default useStyles;
