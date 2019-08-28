import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import BackgroundProductSlider from './BackgroundProductSlider';
import ProductSliderItem from './ProductSliderItem';
import Slider from '../Reusable/Slider';

const useStyles = makeStyles((theme) => ({
  slider: {
    '& .slick-arrow': {
      width: 30,
      height: 30
    },
    '& .slick-arrow:not(:hover)': {
      opacity: 0.5
    },
    '& .slick-arrow:before': {
      fontSize: 35,
      [theme.breakpoints.up('sm')]: {
        fontSize: 60
      }
    },
    '& .slick-next': {
      right: 55,
      [theme.breakpoints.down('xs')]: {
        right: 5
      }
    },
    '& .slick-prev': {
      zIndex: 1,
      left: 30,
      [theme.breakpoints.down('xs')]: {
        left: 2
      }
    }
  }
}));

const sliderOptions = {
  infinite: true
};

function ProductSlider({ products = [] }) {
  const classes = useStyles();

  return (
    <BackgroundProductSlider className={classes.slider}>
      <Slider {...sliderOptions}>
        {products.map((product) => (
          <ProductSliderItem
            key={product.title}
            title={product.title}
            description={product.description}
            imageUrl={product.image_banner}
            googlePlayUrl={product.google_play_url}
            appleStoreUrl={product.app_store_url}
          />
        ))}
      </Slider>
    </BackgroundProductSlider>
  );
}

ProductSlider.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(ProductSliderItem.type.propTypes))
};

export default ProductSlider;
