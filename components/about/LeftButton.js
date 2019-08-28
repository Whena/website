import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '../Link';
import makeStyles from '@material-ui/styles/makeStyles';

const LeftButton = ({ url, buttonText }) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonContainer}>
      <Link href={url}>
        <Button variant="contained" component="span" className={classes.joinNowButton}>
          <span className={classes.buttonText}>{buttonText}</span>
        </Button>
      </Link>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  buttonContainer: {
    textAlign: 'center'
  },
  buttonText: {
    color: 'red',
    fontSize: '2.2em',//20
    textTransform: 'none',

    [theme.breakpoints.down('md')]: {
      fontSize: '1.7em'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3em'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.7em'
    }
  },
  joinNowButton: {
    backgroundColor: '#fff',
    minWidth: 250,
    [theme.breakpoints.down('md')]: {
      minWidth: 230,
      height: 70
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 200,
      height: 50
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
      minWidth: 180,
      height: 50
    },
    marginLeft: 20
  }
}));

export default LeftButton;
