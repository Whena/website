import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import MiniInformationItem from './MiniInformationItem';
import background from '../../static/assets/bg-section-2-homepage.svg';

const useStyles = makeStyles((theme) => ({
  innerContainer: {
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8)
    }
  },
  container: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginBottom: theme.spacing(8)
  }
}));

const InfoContainer = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.container}>
      {props.children}
    </Container>
  )
}

function MiniInformation({ contents = [] }) {
  const classes = useStyles();

  return <InfoContainer>
    {contents.map((content, index) => (
      <Container maxWidth="lg" key={content.title} className={classes.innerContainer}>
        <Grid spacing={3} justify="center" container>
          <MiniInformationItem
            rightContent={index % 2 === 1}
            title={content.title}
            imageUrl={content.image}
            videoUrl={content.video}
            description={content.description}
            actionUrl={content.action_url}
            actionLabel={content.action_label}
            height={255}
          />
        </Grid>
      </Container>
    ))}
  </InfoContainer>
}

export default MiniInformation;
