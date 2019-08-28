import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '../Link';
import { makeStyles } from '@material-ui/styles';

function ActionBannerButton({ actionUrl, actionButtonText }) {
  const classes = useStyles();

  return (
    <Button
      href={actionUrl}
      variant="contained"
      component={Link}
      className={classes.buttonViewMore}
    >
      {actionButtonText}
    </Button>
  );
}

const useStyles = makeStyles((theme) => ({
  buttonViewMore: {
    width: '100%',
    fontSize: 20,
    whiteSpace: 'nowrap',
    backgroundColor: 'rgb(220, 68, 51)',
    color: '#fff',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'rgb(240, 68, 51)'
    }
  }
}));

export default ActionBannerButton;
