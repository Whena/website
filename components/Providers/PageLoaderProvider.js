import React, { useState, useEffect, useCallback } from 'react';
import Router from 'next/router';
import { PageLoaderContext } from '../../utils/context';

export default function PageLoaderProvider(props) {
  const [loading, setLoading] = useState(false);

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
      {...props}
    />
  );
}
