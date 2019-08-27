import React from 'react';
import Container from '@material-ui/core/Container';
import { withRouter } from 'next/router';
// import Link from '../components/Link'
import NotFoundImage from '../static/assets/page-not-found/asset-personabtp-pagenotfound@3x.jpg';
import DefaultPage from '../components/DefaultPage/DefaultPage.component';
import { Constants } from '../constants';

const { PAGE_NOT_FOUND } = Constants;

class ErrorPage extends React.Component {
  static propTypes() {
    return {
      errorCode: React.PropTypes.number.isRequired,
      url: React.PropTypes.string.isRequired
    };
  }

  static getInitialProps({ res, xhr }) {
    const errorCode = res ? res.statusCode : xhr ? xhr.status : null;
    return { errorCode };
  }

  render() {
    var response;
    switch (this.props.errorCode) {
      case 200: // Also display a 404 if someone requests /_error explicitly
      case 404:
        response = (
          <DefaultPage
            imageURL={NotFoundImage}
            title={PAGE_NOT_FOUND.TITLE}
            description={PAGE_NOT_FOUND.DESCRIPTION}
            button={PAGE_NOT_FOUND.BUTTON}
          />
        );
        break;
      case 500:
        response = (
          <Container>
            <h1 className="display-4">Internal Server Error </h1>
            <p>An internal server error occurred.</p>
          </Container>
        );
        break;
      default:
        response = (
          <DefaultPage
            imageURL={NotFoundImage}
            title={PAGE_NOT_FOUND.TITLE}
            description={PAGE_NOT_FOUND.DESCRIPTION}
            button={PAGE_NOT_FOUND.BUTTON}
          />
        );
    }

    return response;
  }
}

export default withRouter(ErrorPage);
