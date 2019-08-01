import React from 'react';
import { Container } from '@material-ui/core';
import Layout from '../components/Layout';
import ImageGallery from '../components/GalleryContent/ImageGallery.component';

function Gallery() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <ImageGallery />
      </Container>
    </Layout>
  );
}

Gallery.getInitialProps = async () => {
  // const res = await axios.get('https://rickandmortyapi.com/api/character/');
  return { };
};

export default Gallery;