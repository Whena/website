import { makeStyles } from '@material-ui/styles';
import { InputBase } from '@material-ui/core';

import { fade, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  bannerContainer: {
    backgroundColor: 'rgb(237, 237, 237)',
    // backgroundImage: 'url(https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg)',
    backgroundSize: 'cover',
    height: 460
  },
  searchButton: {
    backgroundColor: 'rgb(220, 68, 51)',
    height: '100%',
    width: 150,
    [theme.breakpoints.down('sm')]: {
      width: 170,
      height: 60,
      marginTop: 10
    }
  },
  buttonText: {
    color: '#fff',
    textTransform: 'none',
    fontSize: 25,
    [theme.breakpoints.down('md')]: {
      fontSize: 20
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 30
    }
  },
  head: {
    textAlign: 'center',
    marginBottom: 25
  },
  headText: {
    fontSize: 45,
    fontWeight: 700
  }
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 20,
    width: 400,
    height: 75,
    [theme.breakpoints.down('md')]: {
      width: 300,
      height: 50
    },
    padding: '10px 20px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    }
  }
}))(InputBase);

export { useStyles, BootstrapInput };
