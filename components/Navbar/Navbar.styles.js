import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: 120
  },
  joinAsMerchantButton: {
    height: 60,
    width: 250,
    backgroundColor: 'transparent',
    textTransform: 'none',
    fontSize: 20,
    color: '#565e6b'
  },
  joinAsMerchantWordingSpace: {
    marginRight: 5
  },
  langButton: {
    height: 60,
    width: 80,
    backgroundColor: 'transparent',
    marginLeft: 30,
    fontSize: 18,
    fontWeight: 800,
    color: '#000'
  },
  menuWord: {
    textDecoration: 'none',
    color: '#565e6b',
    textTransform: 'uppercase',
  },
  toolbarConf: {
    height: 120
  },
});

export default useStyles;
