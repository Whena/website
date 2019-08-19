import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  linkContainer: {
    "width": "166px",
    "height": "243px",
    [theme.breakpoints.only('sm')]: {
      "width": "220px",
      "height": "100%"
    },
    "&:hover": {
      "textDecoration": "none",
      //grow
      "-webkit-transform": "scale(1.3)",
      "-ms-transform": "scale(1.3)",
      "transform": "scale(1.3)"
      //rotate
      // "-webkit-transform": "rotateZ(30deg)",
      // "-ms-transform": "rotateZ(30deg)",
      // "transform": "rotateZ(30deg)"
    },
  },
  cardContainer: {
    "width": "166px",
    "height": "243px",
    "borderRadius": "24px",
    "boxShadow": "0 0 5px 0 rgba(0, 0, 0, 0.16)",
    "backgroundColor": "#ffffff",
    [theme.breakpoints.only('sm')]: {
      "width": "100%",
      "height": "100%",
    }
  },
  icon: {
    "width": '100%',//'166px',
    "height": '112px',
    [theme.breakpoints.only('sm')]: {
      height: "150px",
      width: '100%'
    },
    "objectFit": 'contain'
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
    "margin": "10px auto"
  },
  cardContent: {
    "width": "100%",
    "marginTop": "6.5px",
    "padding": "0px 5px",
    "height": "100%"
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
