import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  bannerContainer: {
    backgroundColor: 'rgb(237, 237, 237)',
    backgroundImage: 'url(https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg)',
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
    [theme.breakpoints.down('xs')]: {
      width: 200,
      height: 68,
    },
  },
  buttonSeeVideo: {
    width: 250,
    height: 75,
    backgroundColor: 'transparent',
    textTransform: 'none',
    [theme.breakpoints.down('xs')]: {
      width: 200,
      height: 68,
    },
  },
  homeJumbotron: {
    height: '600px',
  },
  playIcon: {
    marginRight: 10
  }
}));

export default useStyles; 
