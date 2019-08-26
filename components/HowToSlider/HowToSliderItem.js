import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { resizeUrlButterImage } from '../../utils/helpers';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  img: {
    height: 'auto',
    width: 'auto',
    maxHeight: '500px',
    maxWidth: '100%'
  },
  hidden: {
    display: 'none'
  }
}));

function HowToSliderItem({
  imageUrl,
  hidden = false,
  ...others
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
    <div
      className={clsx(classes.container, { [classes.hidden]: hidden })}
      {...others}
    >
      <img src={resizeImage} alt="How To" className={classes.img} />
    </div>
  );
}

HowToSliderItem.propTypes = {
  imageUrl: PropTypes.string,
  hidden: PropTypes.bool
};

export default HowToSliderItem;
