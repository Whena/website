import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: '3.5rem',
  },
  description: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    }
  },
  infoImage: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      width: '90%',
      marginRight: 'auto',
      marginLeft: 'auto'
    }
  }
}));

export default useStyles;