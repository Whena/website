import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { resizeUrlButterImage } from '../../utils/helpers';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  img: {
    height: '100%',
    maxHeight: '500px',
    width: 'auto'//'80%'
  }
}));

function HowToSliderItem({ 
  imageUrl 
}) {
  const resizeImage = useMemo(
    () =>
      resizeUrlButterImage(imageUrl, {
        resize: {
          w: 800
        }
      }),
    [imageUrl]
  );
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={resizeImage} alt="How To" className={classes.img} />
    </div>
  );
}

HowToSliderItem.propTypes = {
  imageUrl: PropTypes.string
};

export default HowToSliderItem;
