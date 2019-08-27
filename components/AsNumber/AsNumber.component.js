import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './AsNumber.styles';

const LeftComponent = ({ data = [] }) => {
  const classes = styles();

  return (
    <Grid item xs={12} md={6}>
      {data.map((stat) => (
        <Box mb={'3.5rem'} key={stat.title}>
          <Card className={classes.card}>
            <CardContent>
              <Box mt={3}>
                <Typography variant="h5" gutterBottom className={classes.title}>
                  {stat.title}
                </Typography>
              </Box>
              <Box mt={5}>
                <Typography variant="subtitle1" gutterBottom className={classes.description}>
                  {stat.description}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Grid>
  )
};

const RightComponent = ({title, description}) => {
  const classes = styles();

  return (
    <Grid item xs={11} md={5} className={classes.description}>
      <Typography
        variant="h5"
        gutterBottom
        className={classes.rightComponentTitle}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        className={clsx(classes.description, classes.rightComponentDescription)}
      >
        {description}
      </Typography>
    </Grid>
  );
};

function AsNumber({
  title,
  description,
  data = []
}) {
  const classes = styles();

  return (
    <Container maxWidth="lg">
      <Grid container className={classes.gridContainer} direction="row-reverse">
        <RightComponent
          title={title}
          description={description}
        />
        <LeftComponent
          data={data}
        />
      </Grid>
    </Container>
  );
}

AsNumber.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object)
};

export default AsNumber;
