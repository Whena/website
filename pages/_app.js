import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../components/theme';
import PageLoaderProvider from '../components/Providers/PageLoaderProvider';

const responsiveTheme = responsiveFontSizes(theme);

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      if (ctx && ctx.res) {
        ctx.res.setHeader(
          'Cache-Control',
          'no-cache, no-store, must-revalidate'
        );
      }
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Boost Indonesia</title>
        </Head>
        <MuiThemeProvider theme={responsiveTheme}>
          <PageLoaderProvider>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </PageLoaderProvider>
        </MuiThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
