import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftComponent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightComponent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: 40,
      textAlign: 'center'
    }
  },
  title: {
    fontFamily: 'Raleway',
    fontSize: '48px',
    fontWeight: 800,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#181818',
    marginBottom: 25
  },
  description: {
    fontFamily: "Raleway",
    fontSize: "24px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "2.08",
    letterSpacing: "normal",
    color: "#565656",
    marginBottom: 25
  },
  button: {
    height: "62px",
    borderRadius: "4px",
    border: "solid 1px #ee3124"
  },
  buttonText: {
    width: "215px",
    height: "29px",
    fontFamily: "Raleway",
    fontSize: "20px",
    fontHeight: 600,
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#ee3124"
  },
  linkButton: {
    width: 253,
    "&:hover": {
      textDecoration: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      width: '100%'
    }
  }
}))

export default useStyles;
