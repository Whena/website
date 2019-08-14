import React from 'react';
import Slider from '../Slider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import styles from './PersonaFeatures.styles';

const settings = {
  arrows: true,
  dots: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2
  // variableWidth: true
  // fade: true
};

function PersonaFeatures({ features }) {
  const classes = styles();

  const FeaturesHeader = () => (
    <div className={classes.titleContainer}>
      <Typography variant="h4" className={classes.title}>
        {features[0].TITLE}
      </Typography>
      <Typography variant="body1" className={classes.titleDescription}>
        {features[0].DESCRIPTION}
      </Typography>
    </div>
  );

  return (
    <div className={classes.container} id="hehe">
      <Container maxWidth="lg" className={classes.headerContainer}>
        <Grid container justify="space-around" className={classes.gridContainer} alignItems="center">
          <Grid item lg={4} className={classes.leftSide}>
            <FeaturesHeader />
          </Grid>
          <Grid item lg={8} className={classes.rightSide}>
            <Slider {...settings} className={classes.slider}>
              <Card className={classes.card}>
                <CardActionArea className={classes.cardAction}>
                  <CardMedia
                    className={classes.media}
                    image="/static/assets/boostplay/features/boost-battle/asset-card-boostbattle@3x.png"
                    title="123"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {features[1].TITLE}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {features[1].DESCRIPTION}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card className={classes.card}>
                <CardActionArea className={classes.cardAction}>
                  <CardMedia
                    className={classes.media}
                    image="/static/assets/boostplay/features/boost-battle/asset-card-boostbattle@3x.png"
                    title="123"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {features[1].TITLE}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {features[1].DESCRIPTION}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card className={classes.card}>
                <CardActionArea className={classes.cardAction}>
                  <CardMedia
                    className={classes.media}
                    image="/static/assets/boostplay/features/boost-battle/asset-card-boostbattle@3x.png"
                    title="123"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {features[1].TITLE}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {features[1].DESCRIPTION}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default PersonaFeatures;
