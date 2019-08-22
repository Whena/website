import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: '3.5rem'
  },
  header: {
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
  description: {
    "fontFamily": "Raleway",
    "fontSize": "18px",
    "textAlign": "center",
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontStretch": "normal",
    "lineHeight": "1.56",
    "letterSpacing": "normal",
    "color": "#565656"
  },
  liner: {
    "marginBottom": "50px"
  }
}));

export default useStyles;
