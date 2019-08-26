import React from 'react';
import ComingSoonImage from '../static/assets/coming-soon/asset-personaboostplay-comingsoonpage@3x.png';//'/static/assets/coming-soon/asset-personaboostplay-comingsoonpage@3x.jpg';
// import Layout from '../components/Layout';
import DefaultPage from '../components/DefaultPage/DefaultPage.component';
import { Constants } from '../constants';
const { COMING_SOON } = Constants;

function ComingSoon() {

  return (
    // <Layout title={"Coming Soon"}>
    <DefaultPage
      imageURL={ComingSoonImage}
      title={COMING_SOON.TITLE}
      description={COMING_SOON.DESCRIPTION}
      button={COMING_SOON.BUTTON}
    />
    // </Layout>
  );
}

export default ComingSoon;