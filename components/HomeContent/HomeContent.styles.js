import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    keys: ['xs', 'sm', 'sme', 'md', 'ml', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      sme: 800,
      md: 960,
      ml: 1000,
      lg: 1280,
      xl: 1920
    }
  },
  container: {
    marginTop: 100,
    marginBottom: 100,
  },
  imageContainer: {
    borderRadius: '50%',
    backgroundColor: '#000',
    width: 450,
    height: 450,
    [theme.breakpoints.down('xs')]: {
      width: 200,
      height: 68,
    },
  },
  contentImage: {
    width: 350,
    height: 350,
  },
  contentWording: {
    width: 500
  },
  heading: {
    fontWeight: 700,
    color: '#565e6b',
  },
  description: {
    marginTop: 20,
    color: '#565e6b',
  },
  knowMoreHereLink: {
    textDecoration: 'none',
    fontSize: 25,
    color: 'rgb(220, 68, 51)'
  },
  knowMoreHereLinkContainer: {
    marginTop: 15
  }
}));

export default useStyles;
