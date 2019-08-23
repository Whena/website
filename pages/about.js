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
import { resizeUrlButterImage } from '../utils/helpers';

// import getLodash from 'lodash/get';
import { getAboutUsData } from '../services/page';

const ThirdSection = ({ fields }) => {
  const classes = useStyles();
  const backgroundImage = resizeUrlButterImage(fields.third_media, {
    resize: { h: 340 }
  })

  return (
    <Container maxWidth={false} className={classes.thirdSectionContainer} style={{backgroundImage: `url(${backgroundImage})`}}>
      <Container maxWidth="lg" className={classes.thirdSectionInnerContainer}>
        <Grid container justify="flex-start">
          <Grid item xs={12} sm={10} md={9} lg={9}>
            <Typography variant="h4" className={classes.thirdTitle}>
              {fields.third_title}
            </Typography>
            <Typography variant="h6" className={classes.thirdDescription}>
              {fields.third_description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

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

export default function Index(props) {
  const classes = useStyles();
  const { data } = props;
  const { fields = {} } = data;

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

  return (
    <Layout>
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
      <ThirdSection fields={fields} />
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
    width: "100vw",
    border: "2px solid #ececec",
    backgroundColor: "#ffffff",
    display: "flex",
    padding: "100px 0px",
    flexDirection: "column",
    justifyContent: "center",
    backgroundSize: "1000px",
    [theme.breakpoints.down('sm')]: {
      backgroundSize: "700px"
    },
    [theme.breakpoints.down('xs')]: {
      backgroundSize: "500px"
    },
    backgroundPositionX: "right",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "bottom"
  },
  thirdSectionInnerContainer: {
    // maxWidth: 900
    // backgroundColor: 'black',
    // [theme.breakpoints.down('sm')]: {
    //   justifyContent: 'center'
    // }
  },
  secondSectionItem: {
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
  },
  firstSectionItem: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
  },
  title: {
    // "width": "87px",
    "marginBottom": "30px",
    // "height": "29px",
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
    // "height": "144px",
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
    "marginBottom": "30px",
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
    // marginBottom: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8)
    }
  }
}));
