import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styles from './BoostpreneurMiniInfo.styles';

import MiniInformationItem from '../HomeContent/MiniInformationItem';

function BoostpreneurMiniInfo({ contents = [] }) {
  const classes = styles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid spacing={3} justify="center" container>
        {contents.map((content, index) => {
          const mediaPosition = index % 2 === 0 ? "mediaOnTheLeftSection" : "mediaOnTheRightSection"
          
          return (
            <MiniInformationItem
              classes={{mediaContent: classes[mediaPosition]}}
              key={content.title}
              rightContent={index % 2 === 1}
              title={content.title}
              imageUrl={content.image_banner}
              description={content.description}
              height={246}
            />
          )
        })}
      </Grid>
    </Container>
  );
}

export default BoostpreneurMiniInfo;
