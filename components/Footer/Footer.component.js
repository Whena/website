import React, { useMemo, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';
import Link from '../Link';
import { getLanguage } from '../../utils/helpers';
import { LayoutContext } from '../../utils/context';
import { FooterMenu, SocialMedia } from '../../constants';

// Component styles
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#181818'
  },
  container: {
    paddingTop: theme.spacing(6)
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

function Footer({ lang }) {
  const classes = useStyles();
  const appLayout = useContext(LayoutContext);
  const currentLang = useMemo(() => appLayout.lang || getLanguage(), [
    appLayout
  ]);

  return (
    <div className={classes.footer}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={4}>
          {FooterMenu.map((footerMenu) => (
            <Grid item xs={6} sm={4} key={footerMenu.name.en}>
              <Typography
                variant="h5"
                color="secondary"
                className={classes.headingFooter}
              >
                {footerMenu.name[currentLang]}
              </Typography>
              {footerMenu.nodes.map((footerMenuContent) => (
                <Typography
                  variant="h5"
                  color="secondary"
                  className={classes.textFooter}
                  key={footerMenuContent.name.id}
                >
                  <Link className={classes.links} href={footerMenuContent.url}>
                    {footerMenuContent.name[currentLang]}
                  </Link>
                </Typography>                
              ))}
            </Grid>
          ))}
          <Grid item xs={10} sm={4}>
            <Typography
              variant="h5"
              color="secondary"
              className={classes.headingFooter}
            >
              {SocialMedia.name[currentLang]}
            </Typography>
            <Grid container>
              {SocialMedia.nodes.map((linkIcon) => (
                <Grid item xs={4} md={3} key={linkIcon.name[currentLang]}>
                  <a href={linkIcon.url} target="__blank">
                    <img
                      src={linkIcon.icon}
                      className={classes.image}
                      alt={linkIcon.name[currentLang]}
                    />
                  </a>
                </Grid>
              ))}
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
      </Container>
    </div>
  );
}

export default Footer;
