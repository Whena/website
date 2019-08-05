import { makeStyles } from '@material-ui/core/styles';
// import ImageBackground from ''

const useStyles = makeStyles(theme => ({
  bannerContainer: {
    // backgroundColor: 'rgb(237, 237, 237)',
    backgroundImage: `url(/static/assets/bg-header-homepage.png)`,//'url(https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg)',
    backgroundSize: 'cover',
  },
  headerJumbotron: {
    marginBottom: 40
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
      height: 68,
    },
    [theme.breakpoints.down('xs')]: {
      width: 175,
      height: 63,
    },
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
      height: 68,
    },
    [theme.breakpoints.down('xs')]: {
      width: 175,
      height: 63,
    },
  },
  homeJumbotron: {
    height: '600px',
  },
  playIcon: {
    marginRight: 10
  },
  buttonText: {
    fontSize: 25,
    [theme.breakpoints.down('xs')]: {
      fontSize: 17
    },
  },
}));

export default useStyles;
