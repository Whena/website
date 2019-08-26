import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '3.5rem auto'
  },
  title: {
    "textAlign": "center",
    "fontFamily": "Raleway",
    "fontSize": "24px",
    "fontWeight": "800",
    "fontStyle": "normal",
    "fontStretch": "normal",
    "lineHeight": "normal",
    "letterSpacing": "normal",
    "color": "#181818"
  },
  cards: {
    width: '95% !important',
    [theme.breakpoints.down('md')]: {
      width: '80% !important'
    },
    margin: '20px 20px !important',
    height: 200,
    outline: 'none'
    // "&:focus": {
    //   borderStyle: "outset"
    // }
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
    "textAlign": "center",
    "marginTop": 25,
    "fontFamily": "Raleway",
    "fontSize": "20px",
    "fontWeight": "600",
    "fontStyle": "normal",
    "fontStretch": "normal",
    "lineHeight": "normal",
    "letterSpacing": "normal",
    "color": "#ee3124"
  },
  commentContainer: {
    "textAlign": "center",
    "fontFamily": "Raleway",
    "fontSize": "18px",
    "fontWeight": "normal",
    "fontStyle": "normal",
    "fontStretch": "normal",
    "lineHeight": "1.33",
    "letterSpacing": "normal",
    "color": "#000000"
  }
}));

export default useStyles;
