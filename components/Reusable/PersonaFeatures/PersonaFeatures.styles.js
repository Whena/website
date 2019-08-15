import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  container: {
    borderTop: '1.25px solid rgb(236, 236, 236)',
    borderBottom: '1.25px solid rgb(236, 236, 236)',
    height: '100%'
    // backgroundImage: '/static/assets/featured-background/bg-section-4-boostplay.svg',
    // backgroundSize: 'cover',
    // backgroundColor: 'black'
  },
  leftSide: {
    height: '100%',
    width: '100px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      margin: '30px auto'
    },
  },
  rightSide: {
    // height: '100%'
    // width: 100
  },
  headerContainer: {
    height: '100%'
  },
  slider: {
    height: '100%',
    width: 820,
    [theme.breakpoints.down('md')]: {
      width: '100%'
      //nanti ganti uga ukuran cardnya biar lebih gede
    }
  },
  gridContainer: {
    height: '100% !important',
    margin: '35px auto'
  },
  header: {
    height: '100%'
  },
  titleContainer: {
    width: '80%',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      width: '100%'
    }
  },
  title: {
    marginBottom: 20,
    [theme.breakpoints.down('md')]: {
      fontWeight: 700
    }
  },
  titleDescription: {
    fontSize: '1.3rem'
  },
  card: {
    height: 310,// '100%',
    width: '284px !important',
    [theme.breakpoints.down('md')]: {
      width:'400px !important'
    },
    [theme.breakpoints.down('sm')]: {
      width:'90% !important'
    },
    [theme.breakpoints.down('xs')]: {
      width:'300px !important'
    }
  },
  cardAction: {
    // width: 284
  },
  media: {
    height: 106,
    width: '100%'
  }
}));

export default useStyles;
