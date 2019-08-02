import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  headContainer: {
    margin: '20px auto'
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
    fontSize: 50,
    [theme.breakpoints.down('md')]: {
      fontWeight: 500,
      fontSize: 45
    },
    [theme.breakpoints.down('sm')]: {
      fontWeight: 500,
      fontSize: 40
    }
  },
  description: {
    marginBottom: 40,
    fontSize: 27.5,
    [theme.breakpoints.down('md')]: {
      fontSize: 22.5
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 17.5
    }
  },
  downloadButtonContainer: {
    marginTop: 15
  },
  imageDownloadButton: {
    width: '80%',
    height: '90%',
    [theme.breakpoints.down('md')]: {
      width: 150,
      height: 45,
    },
    [theme.breakpoints.down('sm')]: {
      width: 125,
      height: 40,
    },
  }
}));

export default useStyles;
