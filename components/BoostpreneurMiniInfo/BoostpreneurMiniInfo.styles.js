import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing(8),
    marginBottom: theme.spacing(8),
    // backgroundImage: `url(${background})`,
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8)
    }
  },
  mediaOnTheLeftSection: {
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
  },
  mediaOnTheRightSection: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
  }
}));

export default useStyles;
