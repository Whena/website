import React, { useEffect } from 'react';
import BackgroundProductSlider from './BackgroundProductSlider';
import ProductSliderItem from './ProductSliderItem';
import boostPlay from '../../static/assets/products/boost-play.png';
import Slider from '../Reusable/Slider';
import { makeStyles } from '@material-ui/core/styles';
// import buttercms from 'buttercms'

const butter = require('buttercms')(process.env.BUTTER_TOKEN);

const products = [
  {
    title: 'BoostPlay',
    description: `BoostPlay is designed in a gamification format
to create a hybrid experience of both physical
and digital interaction/transaction between users
and participating Boost merchants`,
    imageUrl: boostPlay,
    googlePlayUrl:
      'https://play.google.com/store/apps/details?id=com.dialog.boost.client.android&hl=en_US',
    appleStoreUrl: 'https://apps.apple.com/id/app/boostplay/id1402493560?l=id'
  },
  {
    title: 'BoostPenjual',
    description: `BoostPenjual is designed in a gamification format
to create a hybrid experience of both physical
and digital interaction/transaction between users
and participating Boost merchants`,
    imageUrl: boostPlay,
    googlePlayUrl:
      'https://play.google.com/store/apps/details?id=com.dialog.boost.client.android&hl=en_US',
    appleStoreUrl: 'https://apps.apple.com/id/app/boostplay/id1402493560?l=id'
  }
];

const useStyles = makeStyles((theme) => ({
  slider: {
    '& .slick-next:before, & .slick-prev:before': {
      fontSize: 35
    },
    '& .slick-next': {
      right: 30,
    },
    '& .slick-prev': {
      left: 30,
      zIndex: 1
    }
  }
}));

const sliderOptions = {
  infinite: true
};

function ProductSlider() {
  const classes = useStyles();
  useEffect(() => {
    butter.content.retrieve(['product_carousel'], {locale: 'en'})
    .then(function(res) {
      console.log(res)
      console.log(res.data.data.product_carousel)
    }).catch(function(resp) {
      console.log(resp)
    });
  }, [])

  return (
    <BackgroundProductSlider className={classes.slider}>
      <Slider {...sliderOptions}>
        {products.map((product) => (
          <ProductSliderItem key={product.title} data={product} />
        ))}
      </Slider>
    </BackgroundProductSlider>
  );
}

export default ProductSlider;
