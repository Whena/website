import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  linkContainer: {
    "width": "166px",
    "height": "243px",
    // "marginBottom": "75px"
  },
  cardContainer: {
    "width": "166px",
    "height": "243px",
    "borderRadius": "24px",
    "boxShadow": "0 0 5px 0 rgba(0, 0, 0, 0.16)",
    "backgroundColor": "#ffffff"
  },
  icon: {
    width: '166px',
    height: '112px',
    objectFit: 'contain'
  },
  persona: {
    "width": "100%",
    "height": "16px",
    "fontFamily": "Raleway",
    "fontSize": "14px",
    "fontWeight": "800",
    "fontStyle": "normal",
    "fontStretch": "normal",
    "lineHeight": "normal",
    "letterSpacing": "normal",
    "color": "#181818",
    "textAlign": "center",
    "marginBottom": "8px"
  },
  cardContent: {
    width: "100%",
    marginTop: "6.5px",
    padding: "0px 5px"
  },
  description: {
    "width": "100%",
    "height": "90px",
    "fontFamily": "Raleway",
    "fontSize": "12px",
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontStretch": "normal",
    "lineHeight": "2",
    "letterSpacing": "normal",
    "textAlign": "center",
    "color": "#565656"
  }
}));

export default useStyles;
