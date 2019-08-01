import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: 'rgb(158, 158, 158)',
    height: 200
  },
  gridContainer: {
    margin: '20px auto',
    height: 200
  },
  joinNow: {
    color: 'rgb(59, 138, 135)',
    fontWeight: 600,
  },
  description: {
    color: '#fff'
  },
  beOurPartner: {
    color: '#fff',
    fontWeight: 600
  },
  descriptionContainer: {
    marginRight: 20
  },
  joinNowTextContainer: {
    textDecoration: 'none'
  }
}));

export default useStyles;
