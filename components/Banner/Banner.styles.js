import { makeStyles } from '@material-ui/core/styles';
import defaultBackgroundImage from '../../static/assets/bg-header-homepage.png';

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    backgroundImage: ({ backgroundImage }) =>
      `url(${backgroundImage ? backgroundImage : defaultBackgroundImage})`,
    backgroundSize: 'cover',
    marginBottom: '3.5rem',
    width: '100vw'
  },
  headerJumbotron: {
    marginBottom: 40,
    fontWeight: 700
  },
  description: {
    marginBottom: 40
  },
  buttonViewMore: {
    width: 250,
    height: 75,
    backgroundColor: 'red',
    color: '#fff',
    textTransform: 'none',
    [theme.breakpoints.down('lg')]: {
      marginRight: 10
    },
    [theme.breakpoints.down('md')]: {
      width: 200,
      height: 68
    },
    [theme.breakpoints.down('xs')]: {
      width: 175,
      height: 63
    }
  },
  buttonSeeVideo: {
    width: 250,
    height: 75,
    backgroundColor: 'transparent',
    textTransform: 'none',
    [theme.breakpoints.down('lg')]: {
      marginLeft: 10
    },
    [theme.breakpoints.down('md')]: {
      width: 200,
      height: 68
    },
    [theme.breakpoints.down('xs')]: {
      width: 175,
      height: 63
    }
  },
  homeJumbotron: {
    height: '600px'
  },
  playIcon: {
    marginRight: 10
  },
  buttonText: {
    fontSize: 25,
    [theme.breakpoints.down('xs')]: {
      fontSize: 17
    },
    color: '#fff'
  }
}));

export default useStyles;
