import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    padding: "30px 0px"
  },
  alignment: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  }
}));

export default useStyles;
