import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
    fontWeight: 500
  },
  description: {
    textAlign: 'center',
    // color: '#fff'
  },
  icon: {
    width: 100
  },
  iconContainer: {
    height: 102,
    width: '100%'
  },
  heading: {
    textAlign: 'center',
    fontWeight: 700,
    // width: '30%',
    // borderBottom: '2px solid red',
    paddingBottom: '1.25%',
    margin: '20px auto'
  }
}));

export default useStyles;
