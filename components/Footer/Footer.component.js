import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/styles";

// Material components
import {
  Typography,
  Box,
  Container,
  useMediaQuery,
  Link
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

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

// Component styles
const useStyles = makeStyles(theme => ({
  company: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  headingFooter: {
    fontWeight: 700,
    marginBottom: theme.spacing(4)
  },
  textFooter: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  image: {
    height: 52
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
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Box mt={10}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={3}>
            <div>
              <Typography variant="h5" className={classes.headingFooter}>
                INFORMATION
              </Typography>
              <Typography variant="h5" className={classes.textFooter}>
                Our Contacts
              </Typography>
              <Typography variant="h5" className={classes.textFooter}>
                Career
              </Typography>
              <Typography variant="h5" className={classes.textFooter}>
                <Link href="/gallery"><p>Media Gallery</p></Link>
              </Typography>
              <Typography variant="h5" className={classes.textFooter}>
                FAQs
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <div>
              <Typography variant="h5" className={cx(classes.headingFooter)}>
                SERVICES
              </Typography>
              <Typography variant="h5" className={classes.textFooter}>
                BoostPlay
              </Typography>
              <Typography variant="h5" className={classes.textFooter}>
                BoostPenjual
              </Typography>
              <Typography variant="h5" className={classes.textFooter}>
                BoostPreneur
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <div>
              <Typography variant="h5" className={classes.headingFooter}>
                SOCIAL MEDIA
              </Typography>
            </div>
            <Grid container>
              <Grid item xs={12} md={3}>
                <div>
                  <img
                    src="/static/assets/Socmed.png"
                    className={classes.image}
                    alt="instagram"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={3}>
                <div>
                  <img
                    src="/static/assets/Socmed.png"
                    className={classes.image}
                    alt="facebook"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box component="div" display="inline">
                  <img
                    src="/static/assets/Socmed.png"
                    className={classes.image}
                    alt="twitter"
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box py={4}>
          <div>
            <Typography className={classes.company} variant="h4" align="right">
              #NGEBOOSTBENTAR
            </Typography>
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default Footer;