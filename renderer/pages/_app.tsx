import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Provider } from 'react-redux'

import storage from '../store/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={storage}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
