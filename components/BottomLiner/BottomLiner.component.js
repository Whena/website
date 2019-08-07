import React from 'react';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export default function BottomLiner() {
  const classes = useStyles();

  return (
    <Divider className={classes.divider} />
  );
}

const useStyles = makeStyles({
  divider: {
    width: 140,
    backgroundColor: 'red',
    height: 2,
    margin: '25px auto'
  }
});
