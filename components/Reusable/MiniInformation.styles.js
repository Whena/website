import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: '3.5rem'
    // backgroundImage: 'url(/static/assets/bg-section-2-homepage.svg)',
    // backgroundColor: '#000'
  },
  gridContainer: {
    backgroundImage: 'url(/static/assets/bg-section-2-homepage.svg)'
  },
  description: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  descriptionLeft: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingLeft: 0
    }
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center'
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  infoImage: {
    width: '284px',
    height: '254px',
    objectFit: 'contain',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      width: '90%',
      marginRight: 'auto',
      marginLeft: 'auto'
    }
  },
  box: {
    marginBottom: '3.5rem',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(6)
    }
  },
  title: {
    // backgroundColor: "#181818",
    fontFamily: 'Raleway',
    fontSize: '22px',
    fontWeight: 800,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.79',
    letterSpacing: 'normal',
    color: '#181818'
  },
  descriptionText: {
    fontFamily: 'Raleway',
    fontSize: '18px',
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.56',
    letterSpacing: 'normal',
    color: '#565656'
  },
  // link: {
  //   "&:hover": {
  //     color: 'white'
  //   }
  // },
  linkText: {
    color: '#ee3124',
    letterSpacing: 'normal',
    fontFamily: 'Raleway',
    fontSize: '20px',
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal'
  }
}));

export default useStyles;
