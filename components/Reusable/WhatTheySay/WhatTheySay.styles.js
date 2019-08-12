import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: '3.5rem',
    // backgroundColor: 'grey'
  },
  title: {
    textAlign: 'center'
  },
  cards: {
    width: '95% !important',
    margin: '20px 20px !important',
    height: 200,
    // border: '1px solid '
  },
  cardContainer: {
    width: 100
  },
  division: {
    height: 300
  },
  contentContainer: {
    height: '100%',
    marginRight: 20
  },
  usernameContainer: {
    textAlign: 'center',
    color: 'red',
    marginTop: 25
  },
  commentContainer: {
    textAlign: 'center',
  }
}));

export default useStyles;
