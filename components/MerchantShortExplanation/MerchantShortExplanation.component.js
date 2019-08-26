import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MiniInformationItem from '../HomeContent/MiniInformationItem';
import BottomLiner from '../BottomLiner/BottomLiner.component';
import PropTypes from 'prop-types';
import styles from './MerchantShortExplanation.styles';

function MerchantShortExplanation({ 
  header,
  description,
  content = {}
}) {
  const classes = styles();
  
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h4" className={classes.header}>
        {header}
      </Typography>
      <div className={classes.liner}>
        <BottomLiner />
        {description ?
          <Typography variant="h4" className={classes.description}>
            {description}
          </Typography>
          :
          null
        }
      </div>

      <MiniInformationItem
        imageUrl={content.image_banner}
        description={content.description}
        height={246}
      />
    </Container>
  );
}

MerchantShortExplanation.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.objectOf(PropTypes.string)
};

export default MerchantShortExplanation;
