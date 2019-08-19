import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import getLodash from 'lodash/get';
import theme from '../components/theme';

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    Router.beforePopState(({ url, as, options }) => {
      const component = getLodash(this.props, 'Component');

      if (component && component.getInitialProps) {
        window.location.href = as;
        return false;
      }

      const components = getLodash(this.props, 'router.components', {});
      const keys = Object.keys(components);

      for (let index = 0; index < keys.length; index++) {
        const value = components[keys[index]];
        if (
          keys[index] !== '/_app' &&
          value &&
          value.Component &&
          value.Component.getInitialProps
        ) {
          window.location.href = as;
          return false;
        }
      }

      return true;
    });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Boost Indonesia</title>
        </Head>
        <ThemeProvider theme={responsiveFontSizes(theme)}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
