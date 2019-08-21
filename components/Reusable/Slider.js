import React from 'react';
import Head from 'next/head';
import ReactSlider from 'react-slick';

export default React.forwardRef(function Slider(props, ref) {
  return (
    <React.Fragment>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <ReactSlider {...props} ref={ref} />
    </React.Fragment>
  );
});
