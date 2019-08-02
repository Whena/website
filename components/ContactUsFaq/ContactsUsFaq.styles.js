import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    height: 200,
    backgroundColor: 'grey',
    // border: '2px solid blue'
  },
  wording: {
    color: '#fff',
    fontSize: '1.0em',

    [theme.breakpoints.down('md')]: {
      fontSize: '0.8em'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.4em'
    },
  },
  buttonText: {
    color: '#fff',
    fontSize: '2.2em',//20
    textTransform: 'none',

    [theme.breakpoints.down('md')]: {
      fontSize: '1.9em'
    },
  },
  wordingContainer: {
    textAlign: 'center',
    // [theme.breakpoints.down('sm')]: {
    //   fontSize: '1.4em'
    // },
    // border: '1px solid blue',
    marginTop: '4%'
  },
  contactUsButton: {
    backgroundColor: 'red',
    width: 300,
    // height: '100%',
    
    [theme.breakpoints.down('md')]: {
      width: 275,
      height: 73
    },
    // [theme.breakpoints.down('md')]: {
    //   width: 275,
    //   height: '100%'
    // },
  },
  contactUsButtonMinified: {
    width: 230,
    backgroundColor: 'red',
  }
}));

export default useStyles; 
