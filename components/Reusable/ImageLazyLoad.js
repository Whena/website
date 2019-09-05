import React, { useMemo } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Img from 'react-image';
import LazyLoad from 'react-lazyload';
import clsx from 'clsx';
import boostLogo from '../../static/assets/boost.jpg';
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
  showedImageHeight,
  logo = boostLogo,
  showPlaceholder = true,
  ...props
}) {

  const classes = useStyles();
  const placeholderImg = useMemo(() => resizeImage(logo, placeHolderHeight), [
    logo,
    placeHolderHeight
  ]);

  const showedImage = useMemo(() => resizeImage(imageUrl, showedImageHeight), [
    imageUrl,
    showedImageHeight
  ]);

  return (
    <LazyLoad
      height={height}
      placeholder={
        showPlaceholder
          ?
          <Placeholder
            placeHolderImage={showPlaceholder ? placeholderImg : ""}
            caption={caption}
            placeholderStyles={placeHolderStyles}
          />
          :
          <div
            className={(clsx(placeHolderStyles))}
          />
      }
      {...props}
    >
      <img
        src={showedImage}
        alt={caption}
        className={clsx(imageStyle)}
      />
      {/* <img
        src={placeholderImg}
        alt={caption}
        className={clsx(placeHolderStyles)}
      /> */}
    </LazyLoad>
  );
}

const useStyles = makeStyles((theme) => ({

}));

export default ImageLazyLoad;
