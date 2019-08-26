import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
// import CardMedia from '@material-ui/core/CardMedia';
import { resizeUrlButterImage } from '../../../utils/helpers';
import Link from '../../Link';
import styles from './CardPersona.styles';

function CardPersona({ persona, description, icon, actionURL }) {
  const classes = styles();
  const imageUrl = useMemo(
    () =>
      resizeUrlButterImage(icon, {
        compress: true,
        resize: {
          w: 250
        },
        auto_image: true
      }),
    [icon]
  );

  return (
    <Link title={description} href={actionURL} className={classes.linkContainer}>
      <Card className={classes.cardContainer}>
        {/* <CardMedia className={classes.icon} image={imageUrl} title={persona} /> */}
        <img src={imageUrl} className={classes.icon} alt={persona} />
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" className={classes.persona}>
            {persona}
          </Typography>
          <Hidden only="xs">
            <Typography variant="body1" className={classes.description}>
              {description}
            </Typography>
          </Hidden>
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
