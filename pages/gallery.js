import React from 'react';
import { Container } from '@material-ui/core';
import Layout from '../components/Layout';
import ImageGallery from '../components/GalleryContent/ImageGallery.component';
import axios from 'axios';

function Gallery(props) {
  return (
    <Layout>
      <Container maxWidth="lg">
        <ImageGallery />
      </Container>
    </Layout>
  );
}

Gallery.getInitialProps = async () => {
  try {
    const res = await axios.get('https://api.buttercms.com/v2/pages/*/homepage/', {
      params: {
        'auth_token': process.env.BUTTER_TOKEN,
        locale: 'en',
      },
    });
    return { stars: res.data };
  } catch (error) {
    console.log(error.response);
    return {};
  }
};
export default Gallery;