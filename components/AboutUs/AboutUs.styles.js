import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  container: {
    backgroundImage: 'url(/static/assets/bg-section-2-homepage.svg)'
  },
  container: {
    marginBottom: '3.5rem',
  },
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
