import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import Layout from '../components/Layout';
// import AboutUs from '../components/AboutUs/AboutUs.component';
import ShortDescription from '../components/ShortDescription.component';

export default function Index() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box py={4}>
          <Typography variant="h4" style={{ fontWeight: 700 }}>
            Mission
          </Typography>
        </Box>
        <Box py={5}>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </Container>
      <ShortDescription />
    </Layout>
  );
}
