import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  container: {
    borderTop: '1.25px solid rgb(236, 236, 236)',
    borderBottom: '1.25px solid rgb(236, 236, 236)',
    height: '100%'
  },
  slider: {
    maxWidth: '100%',
    height: 260,
    overflow: 'hidden',
    display: 'flex',
    '& .slick-slide': {
      minWidth: 290
    },
    '& .slick-track': {
      display: 'flex'
    }
  },
  card: {
    maxWidth: 284,
    margin: '0 20px',
    '&:first-child': {
      marginLeft: 0
    }
  },
  leftSide: {
    height: '100%',
    width: '100px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      margin: '30px auto'
    }
  },
  headerContainer: {
    height: '100%'
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
  cardActionHighlight: {
    opacity: 0,
    backgroundColor: '#fff'
  },
  media: {
    height: 106,
    width: '100%'
  }
}));

export default useStyles;
