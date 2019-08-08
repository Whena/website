import React from 'react';
import {
  Typography,
  Card,
  Button,
  CardActions,
  CardContent,
  Box,
} from '@material-ui/core';
import { Constant } from '../../constants';

import MiniInformation from '../Reusable/MiniInformation.component';

export default function AsNumber() {

  const leftComponent = (classes) => (
    <>
      <Box px={5} mb={'3.5rem'}>
        <Card className={classes.card}>
          <CardContent>
            <Box mt={3}>
              <Typography variant="h5" gutterBottom>
                550,000+
              </Typography>
            </Box>
            <Box mt={5}>
              <Typography variant="subtitle1" gutterBottom>
                Total merchants around of Indonesia
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box px={5} mb={'3.5rem'}>
        <Card className={classes.card}>
          <CardContent>
            <Box mt={3}>
              <Typography variant="h5" gutterBottom>
                +20 Provinces
              </Typography>
            </Box>
            <Box mt={5}>
              <Typography variant="subtitle1" gutterBottom>
                Yogyakarta (75.000) and Bandung (75.000) with the top high merchanta
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );

  const rightComponent = (classes) => (
    <div className={classes.description}>
      <Typography variant="h5" style={{ fontWeight: 700 }} gutterBottom>
        We As A Number
      </Typography>
      <Typography variant="subtitle1">
        Spreading digital financial service throughout the nation.
        Boost is growing from urban cities, sub-urban to rural areas to cater the
        digital financial needs of every layers of Indonesia society.
        550.000 merchants in over 20 provinces Bali 53.000 merchants.
      </Typography>
    </div>
  );

  return (
    <>
      <MiniInformation leftGrid={6} leftComponent={leftComponent} rightComponent={rightComponent} />
    </>
  );
}