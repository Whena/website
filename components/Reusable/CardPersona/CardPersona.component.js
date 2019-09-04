import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
import { resizeUrlButterImage } from '../../../utils/helpers';
import Link from '../../Link';
import styles from './CardPersona.styles';

import ImageLazyLoad from '../../Reusable/ImageLazyLoad';

function CardPersona({ 
  persona,
  description,
  icon,
  actionURL
}) {
  const classes = styles();
  // const imageUrl = useMemo(
  //   () =>
  //     resizeUrlButterImage(icon, {
  //       compress: true,
  //       resize: {
  //         w: 180
  //       },
  //       auto_image: true
  //     }),
  //   [icon]
  // );

  return (
    <Link title={description} href={actionURL} className={classes.linkContainer}>
      <Card className={classes.cardContainer}>
        {/* <img src={imageUrl} className={classes.icon} alt={persona} /> */}
        <ImageLazyLoad 
          imageUrl={icon}
          caption={persona}
          placeHolderHeight={50}
          imageStyle={classes.icon}
          showedImageHeight={500}
        />
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
