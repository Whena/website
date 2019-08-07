import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 120,
    width: '100vw'
  },
  joinAsMerchantButton: {
    height: 60,
    width: 250,
    // backgroundColor: 'transparent',
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
    color: 'rgb(220, 68, 51)'
  },
  langButton: {
    height: 60,
    width: 80,
    backgroundColor: 'transparent',
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 800,
    color: '#000',
  },
  borderLangButton: {
    borderLeft: '2px solid rgb(70,70,70)', 
    // height: '100%'
  },
  menuWord: {
    textDecoration: 'none',
    color: '#565e6b',
    textTransform: 'uppercase',
  },
  toolbarConf: {
    height: 120
  },
  langText: {
    fontSize: 22
  }
});

export default useStyles;
