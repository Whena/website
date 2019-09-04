import React, { useMemo } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Img from 'react-image';
import LazyLoad from 'react-lazyload';
import clsx from 'clsx';

import { resizeUrlButterImage } from '../../utils/helpers';

const resizeImage = (url, height) => {
  return resizeUrlButterImage(url, {
    compress: true,
    resize: {
      h: height
    },
    auto_image: true
  });
};

const Placeholder = ({ 
  placeHolderImage,
  caption,
  placeholderStyles = {}
}) => {

  return (
    <img
      src={placeHolderImage}
      alt={caption}
      // style={{width: "100vw", height: "100vh"}}
      className={clsx(placeholderStyles)}
    />
  );
};

function ImageLazyLoad({
  imageUrl,
  height,
  caption = "",
  imageStyle = {},
  placeHolderHeight,
  placeHolderStyles = {},
  showedImageHeight
}) {

  const classes = useStyles();
  const placeHolderImage = useMemo(() => resizeImage(imageUrl, placeHolderHeight), [
    imageUrl,
    placeHolderHeight
  ]);

  const showedImage = useMemo(() => resizeImage(imageUrl, showedImageHeight), [
    imageUrl,
    showedImageHeight
  ]);
  
  return (
    <LazyLoad height={height}>
      <Img
        src={showedImage}
        loader={
          <Placeholder 
            placeHolderImage={placeHolderImage}
            caption={caption}
            placeholderStyles={imageStyle}
          />
        }
        className={clsx(imageStyle)}
      />
    </LazyLoad>
  );
}

const useStyles = makeStyles((theme) => ({

}));

export default ImageLazyLoad;
