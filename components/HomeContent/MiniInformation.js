import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import MiniInformationItem from './MiniInformationItem';
import background from '../../static/assets/bg-section-2-homepage.svg';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing(8),
    marginBottom: theme.spacing(8),
    backgroundImage: `url(${background})`,
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8)
    }
  }
}));

function MiniInformation({ contents = [] }) {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.container}>
      <Grid spacing={3} justify="center" container>
        {contents.map((content, index) => (
          <MiniInformationItem
            key={content.title}
            rightContent={index % 2 === 1}
            title={content.title}
            imageUrl={content.image}
            videoUrl={content.video}
            description={content.description}
            actionUrl={content.action_url}
            actionLabel={content.action_label}
            height={255}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default MiniInformation;
