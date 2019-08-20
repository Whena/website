import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout';
import DigitalEconomyAboutUs from '../components/DigitalEconomyAboutUs/DigitalEconomy.component';
import MiniInformation from '../components/Reusable/MiniInformation.component';
import BottomBanner from '../components/Reusable/BottomBanner/BottomBanner.component';
import makeStyles from '@material-ui/styles/makeStyles';

import getLodash from 'lodash/get';
import { getAboutUsData } from '../services/page';
import miniInformationStyles from '../components/Reusable/MiniInformation.styles';

export default function Index(props) {
  const classes = useStyles();
  const styles = miniInformationStyles();
  const { data } = props;
  const { fields } = data;
  console.log(fields)
  const LeftButton = () => (
    <div className={classes.buttonContainer}>
      <Button variant="contained" component="span" className={classes.joinNowButton}>
        <span className={classes.buttonText}>{fields.left_button}</span>
      </Button>
    </div>
  );

  const RightInfo = () => (
    <Typography className={classes.wordingContainer} variant="h6" gutterBottom>
      <p className={classes.wording}>{fields.right_description}</p>
    </Typography>
  );

  const FirstSectionLeft = () => (
    <>
      <Typography variant="h4" className={classes.title}>
        {fields.first_title}
      </Typography>
      <Typography variant="h6" className={classes.description}>
        {fields.first_description}
      </Typography>
    </>
  );

  const FirstSectionRight = () => (
    <div>
      <img src={fields.first_media} alt={fields.first_title} width="240px" />
    </div>
  );

  const SecondSectionLeft = () => (
    <img src={fields.second_media} alt={fields.second_title} width="284px" />
  );

  const SecondSectionRight = () => (
    <>
      <Typography variant="h4" className={classes.title}>
        {fields.second_title}
      </Typography>
      <Typography variant="h6" className={classes.description}>
        {fields.second_description}
      </Typography>
    </>
  );

  const MissionComponent = () => (
    <Container maxWidth="lg" style={{ marginBottom: '3.5rem' }}>
      <Box py={4}>
        <Typography variant="h4" style={{ fontWeight: 700 }}>
          Mission
        </Typography>
      </Box>
      <Box py={5}>
        <Typography variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
    </Container>
  );

  const ThirdSection = () => (
    <Container maxWidth={false} className={classes.thirdSectionContainer} style={{backgroundImage: `url(${fields.third_media})`, backgroundSize: 'cover'}}>
      <Container maxWidth="lg" className={classes.thirdSectionInnerContainer}>
        <Typography variant="h4" className={classes.thirdTitle}>
          {fields.third_title}
        </Typography>
        <Typography variant="h6" className={classes.thirdDescription}>
          {fields.third_description}
        </Typography>
      </Container>
    </Container>
  )

  return (
    <Layout title={"About Boost"}>
      {/* <MissionComponent />
      <DigitalEconomyAboutUs /> */}
      <MiniInformation
        style={{paddingTop: 20}}
        leftGrid={8}
        leftComponent={FirstSectionLeft}
        rightComponent={FirstSectionRight}
      />
      <MiniInformation
        leftGrid={4}
        leftComponent={SecondSectionLeft}
        rightComponent={SecondSectionRight}
      />
      <ThirdSection />
      <BottomBanner
        leftGrid={4}
        left={<LeftButton />}
        right={<RightInfo />}
        containerHeight={200}
        background={fields.bottom_banner_background}
      />
    </Layout>
  );
}

Index.getInitialProps = async ({ err, req, res, query, ...others }) => {
  try {
    const data = await getAboutUsData();
    return { data };
  } catch (error) {
    return { data: {}, error };
  }
};

const useStyles = makeStyles(theme => ({
  wordingContainer: {
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3)
    },
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3)
  },
  thirdSectionContainer: {
    width: "100vw",//"1024px",
    height: "340px",
    backgroundColor: "#ffffff"
  },
  thirdSectionInnerContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    // "width": "87px",
    "marginBottom": "30px",
    "height": "29px",
    "fontFamily": "Raleway",
    "fontSize": "24px",
    "fontWeight": "800",
    "fontStyle": "normal",
    "fontStretch": "normal",
    "lineHeight": "normal",
    "letterSpacing": "normal",
    "color": "#181818"
  },
  description: {
    // "width": "520px",
    "height": "144px",
    "fontFamily": "Raleway",
    "fontSize": "18px",
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontStretch": "normal",
    "lineHeight": "1.56",
    "letterSpacing": "normal",
    "color": "#565656"
  },
  wording: {
    color: '#fff',
    lineHeight: 1.5
  },
  buttonContainer: {
    textAlign: 'center'
  },
  buttonText: {
    color: 'red',
    fontSize: '2.2em',//20
    textTransform: 'none',

    [theme.breakpoints.down('md')]: {
      fontSize: '1.7em'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.7em'
    }
  },
  joinNowButton: {
    backgroundColor: '#fff',
    width: 250,
    [theme.breakpoints.down('md')]: {
      width: 230,
      height: 70
    },
    [theme.breakpoints.down('sm')]: {
      width: 200,
      height: 50
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
      width: 180,
      height: 50
    },
    marginLeft: 20
  },
  thirdTitle: {
    "width": "350px",
    "marginBottom": "30px",
    "height": "29px",
    "fontFamily": "Raleway",
    "fontSize": "24px",
    "fontWeight": "800",
    "fontStyle": "normal",
    "fontStretch": "normal",
    "lineHeight": "normal",
    "letterSpacing": "normal",
    "color": "#181818"
  },
  thirdDescription: {
    "width": "814px",
    "height": "122px",
    "fontFamily": "Raleway",
    "fontSize": "18px",
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontStretch": "normal",
    "lineHeight": "1.78",
    "letterSpacing": "normal",
    "color": "#565656"
  }
}));
