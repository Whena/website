import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import { resizeUrlButterImage } from '../../utils/helpers';

const ThirdSection = ({ fields }) => {
  const classes = useStyles();
  const backgroundImage = resizeUrlButterImage(fields.third_media, {
    resize: { h: 340 }
  })

  return (
    <Container maxWidth={false} className={classes.thirdSectionContainer} style={{backgroundImage: `url(${backgroundImage})`}}>
      <Container maxWidth="lg">
        <Grid container justify="flex-start">
          <Grid item xs={12} sm={10} md={9} lg={9}>
            <Typography variant="h4" className={classes.thirdTitle}>
              {fields.third_title}
            </Typography>
            <Typography variant="h6" className={classes.thirdDescription}>
              {fields.third_description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

const useStyles = makeStyles(theme => ({
  thirdDescription: {
    "fontFamily": "Raleway",
    "fontSize": "18px",
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontStretch": "normal",
    "lineHeight": "1.78",
    "letterSpacing": "normal",
    "color": "#565656"
  },
  thirdSectionContainer: {
    width: "100vw",
    border: "2px solid #ececec",
    backgroundColor: "#ffffff",
    display: "flex",
    padding: "100px 0px",
    flexDirection: "column",
    justifyContent: "center",
    backgroundSize: "1000px",
    [theme.breakpoints.down('sm')]: {
      backgroundSize: "700px"
    },
    [theme.breakpoints.down('xs')]: {
      backgroundSize: "500px"
    },
    backgroundPositionX: "right",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "bottom"
  },
  thirdTitle: {
    "marginBottom": "30px",
    "fontFamily": "Raleway",
    "fontSize": "24px",
    "fontWeight": "800",
    "fontStyle": "normal",
    "fontStretch": "normal",
    "lineHeight": "normal",
    "letterSpacing": "normal",
    "color": "#181818"
  },
}));

export default ThirdSection;
