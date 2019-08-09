import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 80,
    width: '100vw'
  },
  minifiedAppBar: {
    paddingBottom: 10,
    borderBottom: '1px solid rgb(220, 68, 51)'
  },
  menus: {
    cursor: 'pointer'
  },
  joinAsMerchantButton: {
    height: 42,
    width: 200,
    textTransform: 'none',
    fontSize: 20,
    border: '2px solid rgb(220, 68, 51)',
    marginRight: 20,

    "&:hover": {
      backgroundColor: '#fff',
      border: '2px solid rgb(220, 68, 51)',
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
    "&:hover": {
      backgroundColor: 'transparent'
    }
  },
  borderLangButton: {
    borderLeft: '2px solid rgb(70,70,70)',
  },
  menuWord: {
    textDecoration: 'none',
    color: '#565e6b',
    textTransform: 'uppercase',
    fontSize: 16
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
    "&:hover": {
      backgroundColor: 'transparent'
    }
  },
  toggleCloseNavbar: {
    height: 24
  },
  toggleContainer: {
    "&:hover": {
      backgroundColor: 'transparent'
    }
  },
  hamburgerList: {
    width: '100vw'
  }
});

export default useStyles;
