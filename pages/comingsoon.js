import React from 'react';
import ComingSoonImage from '../static/assets/coming-soon/asset-personaboostplay-comingsoonpage@3x.png';//'/static/assets/coming-soon/asset-personaboostplay-comingsoonpage@3x.jpg';
import DefaultPage from '../components/DefaultPage/DefaultPage.component';
import { Constants } from '../constants';
const { COMING_SOON } = Constants;

function ComingSoon() {

  return (
    <DefaultPage
      imageURL={ComingSoonImage}
      title={COMING_SOON.TITLE}
      description={COMING_SOON.DESCRIPTION}
      button={COMING_SOON.BUTTON}
    />
  );
}

export default ComingSoon;