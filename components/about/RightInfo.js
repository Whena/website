import React from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

const RightInfo = ({ description }) => {
  const classes = useStyles();

  return (
    <Typography className={classes.wordingContainer} variant="h6" gutterBottom>
      <p className={classes.wording}>{description}</p>
    </Typography>
  );
};

const useStyles = makeStyles(theme => ({
  wordingContainer: {
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3)
    },
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3)
  },
  firstSectionItem: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
  },
  wording: {
    // color: '#fff',
    // lineHeight: 1.5,
    "fontFamily": "Raleway",
    "fontSize": "18px",
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontStretch": "normal",
    "lineHeight": "1.56",
    "letterSpacing": "normal",
    "color": "#ffffff"
  }
}));

export default RightInfo;
