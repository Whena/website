import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  container: {
    borderTop: '1.25px solid rgb(236, 236, 236)',
    borderBottom: '1.25px solid rgb(236, 236, 236)',
    height: 400
    // backgroundImage: '/static/assets/featured-background/bg-section-4-boostplay.svg',
    // backgroundSize: 'cover',
    // backgroundColor: 'black'
  },
  leftSide: {
    height: '100%',
    width: '100px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  rightSide: {
    // height: '100%'
  },
  headerContainer: {
    height: '100%'
  },
  slider: {
    height: '100%',
    width: 800
  },
  gridContainer: {
    height: '100% !important'
  },
  header: {
    height: '100%'
  },
  titleContainer: {
    width: '80%'
  },
  title: {
    marginBottom: 20
  },
  titleDescription: {
    fontSize: '1.3rem'
  },
  card: {
    height: 310,// '100%',
    width: '284px !important'
    // backgroundColor: '#000'
    // marginLeft: 20
  },
  cardAction: {
    // width: 284
  },
  media: {
    height: 106,
    width: 284
  }
}));

export default useStyles;
