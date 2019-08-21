import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: '3.5rem'
  },
  title: {
    textAlign: 'center',
    fontWeight: 500,
    margin: '20px 0'
  },
  description: {
    textAlign: 'center',
    // color: '#fff'
  },
  icon: {
    width: 100,
    margin: 'auto'
  },
  iconContainer: {
    height: 65,
    display: 'flex',
    justifyContent: 'center',
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
