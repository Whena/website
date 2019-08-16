import { makeStyles } from '@material-ui/core/styles';
import background from '../../static/assets/bg-section-2-homepage.svg';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  container: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    // '&::after': {
    //   opacity: 0.1,
    //   top: 0,
    //   left: 0,
    //   bottom: 0,
    //   right: 0,
    //   position: 'absolute',
    //   zIndex: -1,  
    // }
  },
  // container: {
  //   marginBottom: '3.5rem',
  // },
  contentImage: {
    width: 350,
    height: 350,
  },
  imageContainer: {
    backgroundColor: 'grey',
    height: '100%',
    width: '90%'
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
  seeDetailHere: {
    textDecoration: 'none',
    fontSize: 25,
    color: 'rgb(220, 68, 51)'
  },
  seeDetailHereContainer: {
    marginTop: 15
  }
});

export default useStyles;
