import React from 'react';
import Head from 'next/head';
import ReactSlider from 'react-slick';

export default function Slider(props) {
  return (
    <React.Fragment>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <ReactSlider {...props} />
    </React.Fragment>
  );
}
