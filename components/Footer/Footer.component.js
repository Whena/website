// Material components
import React from 'react';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';
import Link from '../Link';

// Externals
import cx from "clsx";

// function useWidth() {
// // hooks
//   const theme = useTheme();
//   const keys = [...theme.breakpoints.keys].reverse();
//   return (
//     keys.reduce((output, key) => {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//       const matches = useMediaQuery(theme.breakpoints.only(key));
//       return !output && matches ? key : output;
//     }, null) || "md"
//   );
// }

const theme = responsiveFontSizes(createMuiTheme());

// Component styles
const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: 'black',
  },
  company: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  headingFooter: {
    fontWeight: 700,
    marginBottom: theme.spacing(4),
    color: '#fff'
  },
  textFooter: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    color: '#fff'
  },
  image: {
    margin: theme.spacing(1),
    // height: 52,
    // objectFit: 'contain',
    // marginRight: theme.spacing(8),
  },
  socialMediaLogo: {
    backgroundImage: 'url("../../static/assets/boost.jpg")',
    backgroundSize: "cover"
  },
  paper: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/user/erondu)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  ngeBoostBentar: {
    color: '#ee3124'
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.footer}>
        <Container maxWidth="lg">
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6} lg={3}>
                <div>
                  <Typography variant="h5" color="secondary" className={classes.headingFooter}>
                    INFORMATION
                  </Typography>
                  <Typography variant="h5" color="secondary" className={classes.textFooter}>
                    Our Contacts
                  </Typography>
                  <Typography variant="h5" color="secondary" className={classes.textFooter}>
                    Career
                  </Typography>
                  <Typography variant="h5" color="secondary" className={classes.textFooter}>
                    <Link href="/gallery">Media Gallery</Link>
                  </Typography>
                  <Typography variant="h5" color="secondary" className={classes.textFooter}>
                    <Link href="/FAQ">FAQs</Link>
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <div>
                  <Typography variant="h5" color="secondary" className={cx(classes.headingFooter)}>
                    SERVICES
                  </Typography>
                  <Typography variant="h5" color="secondary" className={classes.textFooter}>
                    BoostPlay
                  </Typography>
                  <Typography variant="h5" color="secondary" className={classes.textFooter}>
                    BoostPenjual
                  </Typography>
                  <Typography variant="h5" color="secondary" className={classes.textFooter}>
                    BoostPreneur
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <div>
                  <Typography variant="h5" color="secondary" className={classes.headingFooter}>
                    SOCIAL MEDIA
                  </Typography>
                </div>
                <Grid container>
                  <Grid item xs={4} md={3}>
                    <Box>
                      <img
                        src="/static/assets/asset-fb-homepage.png"
                        srcSet="/static/assets/asset-fb-homepage@2x.png 1x, /static/assets/asset-fb-homepage@3x.png 2x"
                        className={classes.image}
                        alt="instagram"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={4} md={3}>
                    <Box>
                      <img
                        src="/static/assets/asset-whatsapp-homepage.png"
                        srcSet="/static/assets/asset-whatsapp-homepage@2x.png 1x, /static/assets/asset-whatsapp-homepage@3x.png 2x"
                        className={classes.image}
                        alt="facebook"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={4} md={3}>
                    <Box>
                      <img
                        src="/static/assets/asset-homepage-instagram.png"
                        srcSet="/static/assets/asset-homepage-instagram@2x.png 1x, /static/assets/asset-homepage-instagram@3x.png 2x"
                        className={classes.image}
                        alt="instagram"
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box py={4}>
              <div>
                <Typography className={classes.company} variant="h4" align="right" className={classes.ngeBoostBentar}>
                  #NGEBOOSTBENTAR
                </Typography>
              </div>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default Footer;