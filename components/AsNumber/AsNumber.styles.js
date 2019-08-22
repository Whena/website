import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  description: {
    // padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      // padding: theme.spacing(6),
      // paddingRight: 0
    },
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'left',
    "fontFamily": "Raleway",
    "fontSize": "18px",
    "fontWeight": "normal",
    "fontStyle": "normal",
    "fontStretch": "normal",
    "lineHeight": "2.78",
    "letterSpacing": "normal",
    "color": "#565656"
  },
  gridContainer: {
    justifyContent: "space-between",
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  },
  rightComponentDescription: {
    marginBottom: "50px"
  },
  title: {
    "fontFamily": "Raleway",
    "fontSize": "24px",
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontStretch": "normal",
    "lineHeight": "normal",
    "letterSpacing": "1.71px",
    "color": "#ee3124" 
  },
  rightComponentTitle: {
    "fontFamily": "Raleway",
    "fontSize": "24px",
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontStretch": "normal",
    "lineHeight": "normal",
    "letterSpacing": "normal",
    "color": "#000000",
    "marginBottom": "40px"
  }
}))

export default useStyles;
