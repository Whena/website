import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import MiniInformationItem from '../../components/HomeContent/MiniInformationItem';
import makeStyles from '@material-ui/styles/makeStyles';

const Section = ({ content }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.secondSectionContainer}>
      <Grid container spacing={3} justify="space-between">
        <MiniInformationItem
          classes={{mediaContent: content.sectionItem}}
          key={content.title}
          rightContent={content.reverse}
          title={content.title}
          imageUrl={content.image}
          videoUrl={content.video}
          description={content.description}
          actionUrl={content.action_url}
          actionLabel={content.action_label}
          height={content.height}
        />
      </Grid>
    </Container>
  )
};

const useStyles = makeStyles(theme => ({
  secondSectionContainer: {
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8)
    }
  }
}));

export default Section;