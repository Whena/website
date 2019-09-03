import React from 'react';
import Router from 'next/router';
import ReactGA from 'react-ga';
import App, { Container } from 'next/app';
import Head from 'next/head';
import nextCookie from 'next-cookies';
import Axios from 'axios';
import getLodash from 'lodash/get';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../components/theme';
import PageLoaderProvider from '../components/Providers/PageLoaderProvider';
import { LANG_KEY, DEFAULT_LANG, initGoogleAnalytics } from '../utils/helpers';
import { LayoutContext } from '../utils/context';
import getConfig from 'next/config';

const responsiveTheme = responsiveFontSizes(theme);

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    const lang = getLodash(nextCookie(ctx), LANG_KEY, DEFAULT_LANG);

    if (Component.getInitialProps) {
      if (ctx && ctx.res && ctx.req) {
        const host = ctx.req.headers.host;
        let protocol = 'https';

        if (host.indexOf('localhost') > -1) {
          protocol = 'http';
        }

        Axios.defaults.baseURL = `${protocol}://${host}`;
      }

      pageProps = await Component.getInitialProps(ctx, lang);
    }

    return { pageProps, lang };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    if (
      process.env.NODE_ENV === 'production' &&
      typeof window !== 'undefined'
    ) {
      initGoogleAnalytics(getConfig.NEXT_STATIC_GOOGLE_ANALYTIC);

      Router.onRouteChangeComplete((url) => {
        ReactGA.pageview(url);
      });
    }
  }

  render() {
    const { Component, pageProps, lang } = this.props;
    const title = getLodash(pageProps, 'data.fields.title');

    return (
      <Container>
        <Head>
          <title>Boost Indonesia</title>
        </Head>
        <MuiThemeProvider theme={responsiveTheme}>
          <LayoutContext.Provider value={{ title, lang, pageProps }}>
            <PageLoaderProvider>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component lang={lang} {...pageProps} />
            </PageLoaderProvider>
          </LayoutContext.Provider>
        </MuiThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
