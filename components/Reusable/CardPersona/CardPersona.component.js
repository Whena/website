import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Link from '../../Link';

import styles from './CardPersona.styles';

function CardPersona({
  persona,
  description,
  icon,
  actionURL
}) {
  const classes = styles();

  return (
    <Link href={actionURL} className={classes.linkContainer}>
      <Card className={classes.cardContainer}>
        <CardMedia
          className={classes.icon}
          image={icon}
          title={persona}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" className={classes.persona}>
            {persona}
          </Typography>
          <Typography variant="body1" className={classes.description}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

CardPersona.propTypes = {
  persona: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  actionURL: PropTypes.string
};

export default CardPersona;
