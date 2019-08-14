import React from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBarFAQ/SearchBarFAQ.component';
import FaqContent from '../components/FaqContent/FaqContent.component';
import BottomBanner from '../components/Reusable/BottomBanner/BottomBanner.component';
import makeStyles from '@material-ui/styles/makeStyles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function Index() {
  const classes = useStyles();

  const LeftInfo = () => (
    <Typography className={classes.wordingContainer} variant="h3" component="h1" gutterBottom>
      <span className={classes.wording}>Still have a question?</span>
    </Typography>
  );

  const RightInfo = () => (
    <Button variant="contained" component="span" className={classes.contactUsButton}>
      <span className={classes.buttonText}>Contact Us Now</span>
    </Button>
  );

  return (
    <Layout>
      <SearchBar />
      <FaqContent />
      <BottomBanner
        leftGrid={6}
        left={<LeftInfo />}
        right={<RightInfo />}
        containerHeight={200}
        layoutColor="rgb(158, 158, 158)"
        leftAlignment="center"
      />
    </Layout>
  );
}

const useStyles = makeStyles(theme => ({
  wordingContainer: {
    marginTop: '4%',
    textAlign: 'right',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
  wording: {
    color: '#fff',
    fontSize: '1.0em',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.7em'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7em'
    }
  },
  buttonText: {
    color: '#fff',
    fontSize: '2.2em',//20
    textTransform: 'none',

    [theme.breakpoints.down('md')]: {
      fontSize: '1.7em'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.7em'
    }
  },
  contactUsButton: {
    backgroundColor: 'red',
    width: 300,
    [theme.breakpoints.down('md')]: {
      width: 230,
      height: 70
    },
    marginLeft: 20
  }
}));
