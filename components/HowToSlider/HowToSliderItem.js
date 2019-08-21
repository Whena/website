import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { resizeUrlButterImage } from '../../utils/helpers';
const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  img: {
    height: 'auto',
    width: '80%'
  }
}));

export default function HowToSliderItem({ imageUrl }) {
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
