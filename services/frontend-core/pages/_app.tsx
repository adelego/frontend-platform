import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Frontend Platform - Fly away</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default App;
