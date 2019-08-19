import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: '3.5rem'
  },
  title: {
    "marginBottom": "50px",
    "height": "29px",
    "fontFamily": "Raleway",
    "fontSize": "24px",
    "fontWeight": "800",
    "fontStyle": "normal",
    "fontStretch": "normal",
    "lineHeight": "normal",
    "letterSpacing": "normal",
    "color": "#181818",
    "textAlign": "center"
  },
  eachCard: {
    marginBottom: "75px",
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default useStyles;
