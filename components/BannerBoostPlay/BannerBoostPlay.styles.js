import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  bannerContainer: {
    backgroundColor: 'rgb(237, 237, 237)',
    backgroundImage: 'url(https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg)',
    backgroundSize: 'cover',
    height: 600
  },
  bannerMenu: {
    marginLeft: 100,
  },
  head: {
    marginBottom: 40,
    fontWeight: 600,
    fontSize: 60,
    [theme.breakpoints.down('xs')]: {
      fontWeight: 500,
      fontSize: 45
    }
  },
  description: {
    marginBottom: 40,
    fontSize: 40,
    [theme.breakpoints.down('xs')]: {
      fontSize: 25
    } 
  },
  downloadNowButton: {
    width: 500,
    height: 90,
    [theme.breakpoints.down('xs')]: {
      width: 280,
      height: 75
    }
  },
  buttonText: {
    fontSize: 25,
    [theme.breakpoints.down('xs')]: {
      fontSize: 15
    }
  }
}));

export default useStyles;
