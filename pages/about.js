import React from 'react';
import Box from '@material-ui/core/Box';
import Layout from '../components/Layout';
import BottomBanner from '../components/Reusable/BottomBanner/BottomBanner.component';
import makeStyles from '@material-ui/styles/makeStyles';
import { getAboutUsData } from '../services/page';
import ThirdSection from '../components/about/ThirdSection';
import Section from '../components/about/Section';
import LeftButton from '../components/about/LeftButton';
import RightInfo from '../components/about/RightInfo';

export default function Index({ data = {} }) {
  const classes = useStyles();
  const { fields = {} } = data;

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
          height: 250,
          sectionItem: classes.secondSectionItem
        }}
      />
      <ThirdSection fields={fields} />
      <BottomBanner
        leftGrid={4}
        left={
          <LeftButton 
            url={fields.action_url} 
            buttonText={fields.left_button} 
          />
        }
        right={<RightInfo description={fields.right_description} />}
        background={fields.bottom_banner_background}
      />
    </Layout>
  );
}

Index.getInitialProps = async ({ err, req, res, query, ...others }, locale) => {
  try {
    const data = await getAboutUsData({ locale });
    return { data };
  } catch (error) {
    return { data: {}, error };
  }
};

const useStyles = makeStyles(theme => ({
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
  }
}));
