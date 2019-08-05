import React from 'react';
import {
  Typography,
  Box,
  Card,
  CardMedia,
  Grid,
  Button
} from '@material-ui/core';
// import axios from 'axios';

import useStyles from './imageGallery.style';

const images = [
  '/static/assets/boost.jpg',
  '/static/assets/boost.jpg',
  '/static/assets/boost.jpg',
  '/static/assets/boost.jpg',
  '/static/assets/boost.jpg',
  '/static/assets/boost.jpg',
  '/static/assets/boost.jpg',
  '/static/assets/boost.jpg',
  '/static/assets/boost.jpg',
];

function ImageGallery() {
  const classes = useStyles();
  return (
    <>
      <Box py={4}>
        <Typography variant="h4" style={{ fontWeight: 700 }}>
          Gallery
        </Typography>
      </Box>
      <Box py={5}>
        <Typography variant="h5">
          {/* 'Then you've heard more than I can speak to,' answered the Gaffer. I
          know nothing about jools. Mr. Bilbo is free with his money, and there
          seems no lack of it; but I know of no tunnel -making. I saw Mr. Bilbo
          when he came back, a matter of sixty years ago, when I was a lad. I'd
          not long come prentice to old Holman (him being my dad's cousin), but
          he had me up at Bag End helping him to keep folks from trampling and
          trapessing all over the garden while the sale was on. And in the
          middle of it all Mr. Bilbo comes u the Hill with a pony and some
          mighty big bags and a couple of chests. I don't doubt they were mostly
          full of treasure he had picked up in foreign parts, where there be
          mountains of gold, they say; but there wasn't enough to fill tunnels.
          But my lad Sam will know more about that. He's in and out of Bag End.
          Crazy about stories of the old days he is, and he listens to all Mr.
          Bilbo's tales. Mr. Bilbo has learned him his letters - meaning no
          harm, mark you, and I hope no harm will come of it. */}
          {/* { props.content } */}
        </Typography>
      </Box>
      <Box py={4}>
        <Grid container spacing={4}>
          {images.map((image, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Grid container justify="center">
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={image}
                    title="Yummy"
                  />
                </Card>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Grid container justify="center" spacing={4}>
        <Grid item>
          <Button variant="outlined" className={classes.button}>
            <Typography variant="h5">See More</Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ImageGallery;
