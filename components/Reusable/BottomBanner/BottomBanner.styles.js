import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    // marginTop: 15,
    // backgroundColor: "rgb(158, 158, 158)"
  },
  alignment: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  }
}));

export default useStyles;
