import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    margin: '50px auto'
  },
  subMenu: {
    fontSize: 40,
    fontWeight: 700
  },
  qContainer: {
    backgroundColor: '#000',
    width: '100%',
    height: 100,
    margin: '15px auto'
  },
  listContainer: {
    width: 300
  }
}));

export default useStyles;
