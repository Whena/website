import React, { useCallback } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import getLodash from 'lodash/get';

const useStyles = makeStyles((theme) => ({
  root: {},
  numberContainer: {
    height: '100%'
  },
  sliderContainer: {
    cursor: 'pointer'
  },
  number: {
    width: 35,
    height: 35,
    fontWeight: 700,
    fontSize: 21,
    border: '1px solid',
    borderColor: '#ee3124',
    color: (props) => (props.isActive ? '#FFF' : '#ee3124'),
    backgroundColor: (props) => (props.isActive ? '#ee3124' : '#FFF'),
    borderRadius: '50%',
    textAlign: 'center',
    display: 'block',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  title: {
    fontWeight: 700
  },
  description: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1)
  }
}));

const NumberAction = function({ index, isActive, ...others }) {
  const classes = useStyles({ isActive });
  return (
    <span className={classes.number} {...others}>
      {index}
    </span>
  );
};

export default function HowToSliderNavigation({
  sliders = [],
  onChange,
  current = 0
}) {
  const classes = useStyles();
  const handleClick = useCallback(
    (event) => {
      const index = getLodash(event.currentTarget, 'dataset.index', 0);
      onChange(Number(index));
    },
    [onChange]
  );

  return (
    <List className={classes.root}>
      {sliders.map((slider, index) => (
        <ListItem
          key={slider.title}
          className={classes.sliderContainer}
          onClick={handleClick}
          data-index={index}
          alignItems="flex-start"
        >
          <div className={classes.numberContainer}>
            <NumberAction isActive={index === current} index={index + 1} />
          </div>
          <ListItemText
            className={classes.description}
            primary={
              <Typography className={classes.title} gutterBottom variant="h6">
                {slider.title}
              </Typography>
            }
            secondary={
              <Typography variant="body2">{slider.description}</Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
