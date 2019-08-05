import React from 'react';
import { Grid, Typography, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  image: {
    width: '100%',
  },
}));
export default function AboutUs(props) {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container alignItems="center">
        <Grid item sm="12" md="5" lg="5">
          <Box mr={5}>
            {
              <img
                className={classes.image}
                // src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/No_image_available_600_x_450.svg/1200px-No_image_available_600_x_450.svg.png"
                src="https://source.unsplash.com/user/erondu"
                alt="background"
              />
            }
          </Box>
        </Grid>
        <Grid item sm="12" md="7" lg="7">
          <Box>
            <Typography variant="h4" color="inherit" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" paragraph="true">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Typography variant="h5" color="red">
              Know more here...
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
