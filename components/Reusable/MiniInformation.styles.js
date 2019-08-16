import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: '3.5rem'
    // backgroundImage: 'url(/static/assets/bg-section-2-homepage.svg)',
    // backgroundColor: '#000'
  },
  gridContainer: {
    backgroundImage: 'url(/static/assets/bg-section-2-homepage.svg)'
  },
  description: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    }
  },
  descriptionLeft: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingLeft: 0,
    }
  },
  infoImage: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      width: '90%',
      marginRight: 'auto',
      marginLeft: 'auto',
    }
  },
  box: {
    marginBottom: '3.5rem',
    // paddingLeft: 40,
    // paddingRight: 40,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(6),
    }
  }
}));

export default useStyles;