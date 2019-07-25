import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    // display: 'flex',
    // justifyContent: 'space-around',
    marginTop: 100,
    marginBottom: 100,
  },
  imageContainer: {
    borderRadius: '50%',
    backgroundColor: '#000',
    width: 350,
    height: 350
  },
  contentImage: {
    width: 350,
    height: 350,
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
})

export default useStyles
