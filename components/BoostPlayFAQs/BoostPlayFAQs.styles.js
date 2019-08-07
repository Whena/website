import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  questionBox: {
    width: '100%',
  },
  expansionPanel: {
    marginTop: 10
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  header: {
    fontSize: 40,
    fontWeight: 700
  },
  headerContainer: {
    textAlign: 'center',
    margin: '20px auto',
    width: '20%'
  },
  fake: {
    backgroundColor: 'grey',
    height: theme.spacing(1),
    margin: theme.spacing(2),
    // Selects every two elements among any group of siblings.
    '&:nth-child(2n)': {
      marginRight: theme.spacing(3),
    },
  },
  paper: {
    position: 'absolute',
    top: 36,
    right: 0,
    left: 0,
  },
  questionButton: {
    width: '100%',
    flexShrink: 1,
    height: 50,
    // border: '1px solid blue'
  }
}));

export default useStyles;
