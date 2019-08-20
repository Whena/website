import React from 'react';
// import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Layout from '../components/Layout';
// import DigitalEconomyAboutUs from '../components/DigitalEconomyAboutUs/DigitalEconomy.component';
// import MiniInformation from '../components/Reusable/MiniInformation.component';
import MiniInformationItem from '../components/HomeContent/MiniInformationItem';
import BottomBanner from '../components/Reusable/BottomBanner/BottomBanner.component';
import makeStyles from '@material-ui/styles/makeStyles';

// import getLodash from 'lodash/get';
import { getAboutUsData } from '../services/page';
// import miniInformationStyles from '../components/Reusable/MiniInformation.styles';

const Section = ({content}) => {
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

export default function Index(props) {
  const classes = useStyles();
  const { data } = props;
  const { fields } = data;
  console.log(fields);
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
  );

  return (
    <Layout title={"About Boost"}>
      <Box pt={7}>
        <Section
          content={{
            title: fields.first_title,
            image: fields.first_media,
            description: fields.first_description,
            reverse: true,
            height: 240,
            sectionItem: classes.firstSectionItem
          }}
        />
      </Box>
      <Section
        content={{
          title: fields.second_title,
          image: fields.second_media,
          description: fields.second_description,
          reverse: false,
          height: 284,
          sectionItem: classes.secondSectionItem
        }}
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
  secondSectionItem: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  firstSectionItem: {
    display: 'flex',
    justifyContent: 'flex-end'
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
  },
  secondSectionContainer: {
    paddingBottom: theme.spacing(8),
    marginBottom: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8)
    }    
  }
}));
