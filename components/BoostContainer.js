import React from 'react';
import { Container, Box } from '@material-ui/core';

export default function BoostContainer(props) {
  return (
    <Box px={8} py={8}>
      <Container maxWidth="xl">
        { props.children }
      </Container>
    </Box>
  );
}
