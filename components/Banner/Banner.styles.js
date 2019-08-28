import { makeStyles } from '@material-ui/core/styles';
import defaultBackgroundImage from '../../static/assets/bg-header-homepage.png';

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: ({ contentPosition }) => contentPosition,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  },
  bannerContainer: {
    backgroundImage: ({ backgroundImage }) =>
      `url(${backgroundImage ? backgroundImage : defaultBackgroundImage})`,
    backgroundPosition: ({ backgroundPosition }) =>
      backgroundPosition === 'left' ? 'left' : 'right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginBottom: '3.5rem'
  },
  actionButton: {
    '& > *:first-child': {
      height: 50,
      '&:not(:last-child)': {
        marginRight: 10
      }
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  },
  headerJumbotron: {
    marginBottom: 40,
    fontWeight: 900
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
      width: '100%',
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
