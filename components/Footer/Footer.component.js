import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';
import facebookIcon from '../../static/assets/asset-fb-homepage.svg';
import whatsappIcon from '../../static/assets/asset-whatsapp-homepage.svg';
import instagramIcon from '../../static/assets/asset-homepage-instagram.svg';
import Link from '../Link';
import { Constants } from '../../constants';

// Externals
import cx from 'clsx';

const { SOCIAL_MEDIAS } = Constants;

// Component styles
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'black'
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
  links: {
    color: '#fff',
    '&:hover': {
      textDecoration: 'none',
      color: '#D3D3D3'
    }
  },
  image: {
    margin: theme.spacing(1),
    height: 52
  },
  ngeBoostBentar: {
    color: '#ee3124',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container maxWidth="lg">
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={6} sm={4}>
              <Typography
                variant="h5"
                color="secondary"
                className={classes.headingFooter}
              >
                INFORMATION
              </Typography>
              <Typography
                variant="h5"
                color="secondary"
                className={classes.textFooter}
              >
                <Link className={classes.links} href="/comingsoon">
                  Our Contacts
                </Link>
              </Typography>
              <Typography
                variant="h5"
                color="secondary"
                className={classes.textFooter}
              >
                <Link className={classes.links} href="/comingsoon">
                  Career
                </Link>
              </Typography>
              <Typography
                variant="h5"
                color="secondary"
                className={classes.textFooter}
              >
                <Link className={classes.links} href="/gallery">
                  Media Gallery
                </Link>
              </Typography>
              <Typography
                variant="h5"
                color="secondary"
                className={classes.textFooter}
              >
                <Link className={classes.links} href="/FAQ">
                  FAQs
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography
                variant="h5"
                color="secondary"
                className={cx(classes.headingFooter)}
              >
                SERVICES
              </Typography>
              <Typography
                variant="h5"
                color="secondary"
                className={classes.textFooter}
              >
                <Link className={classes.links} href="/boostplay">
                  BoostPlay
                </Link>
              </Typography>
              <Typography
                variant="h5"
                color="secondary"
                className={classes.textFooter}
              >
                <Link className={classes.links} href="/boostpenjual">
                  BoostPenjual
                </Link>
              </Typography>
              <Typography
                variant="h5"
                color="secondary"
                className={classes.textFooter}
              >
                <Link className={classes.links} href="/boostpreneur">
                  BoostPreneur
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={10} sm={4}>
              <Typography
                variant="h5"
                color="secondary"
                className={classes.headingFooter}
              >
                SOCIAL MEDIA
              </Typography>
              <Grid container>
                <Grid item xs={4} md={3}>
                  <a href={SOCIAL_MEDIAS.FACEBOOK} target="__blank">
                    <img
                      src={facebookIcon}
                      className={classes.image}
                      alt="whatsapp"
                    />
                  </a>
                </Grid>
                <Grid item xs={4} md={3}>
                  <img
                    src={whatsappIcon}
                    className={classes.image}
                    alt="whatsapp"
                  />
                </Grid>
                <Grid item xs={4} md={3}>
                  <a href={SOCIAL_MEDIAS.INSTAGRAM} target="__blank">
                    <img
                      src={instagramIcon}
                      className={classes.image}
                      alt="instagram"
                    />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box py={4}>
            <div>
              <Typography
                variant="h4"
                align="right"
                className={classes.ngeBoostBentar}
              >
                #NGEBOOSTBENTAR
              </Typography>
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Footer;
