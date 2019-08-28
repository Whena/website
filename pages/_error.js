import React from 'react';
import PropTypes from 'prop-types';
import NotFoundImage from '../static/assets/page-not-found/asset-personabtp-pagenotfound@3x.jpg';
import DefaultPage from '../components/DefaultPage/DefaultPage.component';
import { Constants } from '../constants';

const { PAGE_NOT_FOUND, SERVER_ERROR } = Constants;

class ErrorPage extends React.Component {
  static propTypes() {
    return {
      errorCode: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired
    };
  }

  static getInitialProps({ res, xhr }) {
    const errorCode = res ? res.statusCode : xhr ? xhr.status : null;
    return { errorCode };
  }

  render() {
    switch (this.props.errorCode) {
      case 200: // Also display a 404 if someone requests /_error explicitly
      case 404:
        return (
          <DefaultPage
            imageURL={NotFoundImage}
            title={PAGE_NOT_FOUND.TITLE}
            description={PAGE_NOT_FOUND.DESCRIPTION}
            button={PAGE_NOT_FOUND.BUTTON}
          />
        );
      case 500:
        return (
          <DefaultPage
            imageURL={NotFoundImage}
            title={SERVER_ERROR.TITLE}
            description={SERVER_ERROR.DESCRIPTION}
            button={SERVER_ERROR.BUTTON}
          />
        );
      default:
        return (
          <DefaultPage
            imageURL={NotFoundImage}
            title={PAGE_NOT_FOUND.TITLE}
            description={PAGE_NOT_FOUND.DESCRIPTION}
            button={PAGE_NOT_FOUND.BUTTON}
          />
        );
    }
  }
}

export default ErrorPage;
