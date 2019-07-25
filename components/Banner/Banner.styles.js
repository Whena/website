import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
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
    textTransform: 'none'
  },
  buttonSeeVideo: {
    width: 250,
    height: 75,
    backgroundColor: 'transparent',
    textTransform: 'none'
  },
  homeJumbotron: {
    height: '600px',
    marginRight: 90
  },
  playIcon: {
    marginRight: 10
  }
})

export default useStyles
