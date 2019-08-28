import React from 'react';
import Slider from '../Slider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import CardActionArea from '@material-ui/core/CardActionArea';
import PropTypes from 'prop-types';
import BottomLiner from '../../BottomLiner/BottomLiner.component';
import styles from './PersonaFeatures.styles';

const settings = {
  arrows: false,
  dots: false,
  infinite: false,
  centerPadding: '0px',
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  adaptiveHeight: true
};

function PersonaFeatures({
  features = [],
  title,
  description
}) {
  const classes = styles();
  
  return (
    <div className={classes.container}>
      <Container maxWidth="lg" className={classes.headerContainer}>
        <Grid
          container
          justify="space-around"
          className={classes.gridContainer}
          alignItems="center"
        >
          <Grid item xs={12} lg={4} className={classes.leftSide}>
            <div className={classes.titleContainer}>
              <Typography variant="h4" className={classes.title}>
                {title}
              </Typography>
              <Hidden implementation="css" lgUp>
                <BottomLiner />
              </Hidden>
              <Typography
                variant="body1"
                className={classes.titleDescription}
              >
                {description}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Slider {...settings} className={classes.slider}>
              {features.map((feature) => (
                <Card
                  component="div"
                  key={feature.title}
                  className={classes.card}
                >
                  <CardActionArea
                    disableRipple
                    disableTouchRipple
                    className={classes.cardAction}
                    classes={{
                      focusHighlight: classes.cardActionHighlight,
                      focusVisible: classes.cardActionHighlight
                    }}
                  >
                    <CardMedia
                      className={classes.media}
                      image={feature.image_banner}
                      title={feature.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

PersonaFeatures.propTypes = {
  features: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  description: PropTypes.string
};

export default PersonaFeatures;
