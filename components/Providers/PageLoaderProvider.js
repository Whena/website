import React, { useState, useEffect, useCallback } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { PageLoaderContext } from '../../utils/context';

const useStyles = makeStyles((theme) => ({
  loaderColor: {
    backgroundColor: '#dc004e'
  },
  loaderContainer: {
    position: 'absolute',
    width: '100%'
  }
}));

export default function PageLoaderProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const handleStartLoading = useCallback(() => {
    setLoading(true);
  }, []);

  const handleStopLoading = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    Router.events.on('routeChangeStart', handleStartLoading);
    Router.events.on('routeChangeComplete', handleStopLoading);
    Router.events.on('routeChangeError', handleStopLoading);

    return () => {
      Router.events.off('routeChangeStart', handleStartLoading);
      Router.events.off('routeChangeComplete', handleStopLoading);
      Router.events.off('routeChangeError', handleStopLoading);
    };
  }, [handleStartLoading, handleStopLoading]);

  return (
    <PageLoaderContext.Provider
      value={{ loading, show: handleStartLoading, hide: handleStopLoading }}
    >
      {loading && (
        <LinearProgress
          classes={{
            barColorPrimary: classes.loaderColor,
            root: classes.loaderContainer
          }}
        />
      )}
      {children}
    </PageLoaderContext.Provider>
  );
}
